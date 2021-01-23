import { ENUMS } from '@/lib/enums';
import { getNodes, roundValue } from '@/lib/homee';

export default async (_, res) => {
    const nodes = await getNodes();

    if (!nodes.length) {
        return res.status(504).send('Gateway Timeout');
    }

    const temperature = nodes
        .find((node) => node.id === 69)
        .attributes.find(
            (attribute) => attribute.type === ENUMS.AttributeType.Temperature
        );

    const humidity = nodes
        .find((node) => node.id === 69)
        .attributes.find(
            (attribute) =>
                attribute.type === ENUMS.AttributeType.RelativeHumidity
        );

    const accumulatedEnergy = nodes
        .flatMap((node) => {
            return (
                node.attributes.find(
                    (attribute) =>
                        attribute.type === ENUMS.AttributeType.CurrentEnergyUse
                ) || []
            );
        })
        .reduce((acc, attribute) => {
            return acc + attribute.current_value;
        }, 0);

    const lights = nodes
        .flatMap((node) => {
            if (
                node.profile === ENUMS.NodeProfile.DimmablePlug ||
                node.profile === ENUMS.NodeProfile.DimmableColorLight ||
                node.profile === ENUMS.NodeProfile.DimmableExtendedColorLight ||
                node.profile ===
                    ENUMS.NodeProfile.DimmableColorTemperatureLight ||
                (node.profile === ENUMS.NodeProfile.DimmableLight &&
                    node.state === ENUMS.NodeState.Available)
            ) {
                return node.attributes.find(
                    (attribute) => attribute.type === ENUMS.AttributeType.OnOff
                );
            } else {
                return [];
            }
        })
        .some((attribute) => {
            return attribute.current_value > 0;
        })
        ? 'An'
        : 'Aus';

    const outsideTemperature = nodes
        .find((node) => node.id === 72)
        .attributes.find(
            (attribute) => attribute.type === ENUMS.AttributeType.Temperature
        );

    const rain =
        nodes
            .find((node) => node.id === 258)
            .attributes.find(
                (attribute) => attribute.type === ENUMS.AttributeType.FloodAlarm
            ).current_value > 0
            ? 'Es regnet'
            : 'Kein Regen';

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=600, stale-while-revalidate=1200'
    );

    return res.status(200).json({
        lights,
        rain,
        temperature: createString(temperature.current_value, temperature.unit),
        humidity: createString(humidity.current_value, humidity.unit),
        energy: createString(accumulatedEnergy, 'W'),
        outsideTemperature: createString(
            outsideTemperature.current_value,
            outsideTemperature.unit
        )
    });
};

function createString(value, unit) {
    return `${roundValue(value)} ${decodeURIComponent(unit)}`;
}
