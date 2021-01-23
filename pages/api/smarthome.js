import { ENUMS } from '@/lib/enums';
import { getNodes, roundValue } from '@/lib/homee';

export default async (_, res) => {
    const nodes = await getNodes();

    if (!nodes.length) {
        return res.status(504).send('Gateway Timeout');
    }

    // Temperature
    const livingRoomNode = nodes.find((node) => node.id === 69);
    const temperatureAttribute = livingRoomNode.attributes.find(
        (attribute) => attribute.type === ENUMS.AttributeType.Temperature
    );
    const temperature = `${roundValue(
        temperatureAttribute.current_value
    )} ${decodeURIComponent(temperatureAttribute.unit)}`;

    // Humidity
    const humidityAttribute = livingRoomNode.attributes.find(
        (attribute) => attribute.type === ENUMS.AttributeType.RelativeHumidity
    );
    const humidity = `${roundValue(
        humidityAttribute.current_value
    )} ${decodeURIComponent(humidityAttribute.unit)}`;

    // Energy
    const energyAttributes = nodes.flatMap((node) => {
        return (
            node.attributes.find(
                (attribute) =>
                    attribute.type === ENUMS.AttributeType.CurrentEnergyUse
            ) || []
        );
    });
    const accumulatedEnergy = energyAttributes.reduce((acc, attribute) => {
        return acc + attribute.current_value;
    }, 0);
    const energy = `${roundValue(accumulatedEnergy)} W`;

    // Lights
    const lightAttributes = nodes.flatMap((node) => {
        if (
            node.profile === ENUMS.NodeProfile.DimmablePlug ||
            node.profile === ENUMS.NodeProfile.DimmableColorLight ||
            node.profile === ENUMS.NodeProfile.DimmableExtendedColorLight ||
            node.profile === ENUMS.NodeProfile.DimmableColorTemperatureLight ||
            (node.profile === ENUMS.NodeProfile.DimmableLight &&
                node.state === ENUMS.NodeState.Available)
        ) {
            return node.attributes.find(
                (attribute) => attribute.type === ENUMS.AttributeType.OnOff
            );
        } else {
            return [];
        }
    });
    const lights = lightAttributes.some((attribute) => {
        return attribute.current_value > 0;
    })
        ? 'An'
        : 'Aus';

    // Outside temparature
    const outsideNode = nodes.find((node) => node.id === 72);
    const outsideTemperatureAttribute = outsideNode.attributes.find(
        (attribute) => attribute.type === ENUMS.AttributeType.Temperature
    );
    const outsideTemperature = `${roundValue(
        outsideTemperatureAttribute.current_value
    )} ${decodeURIComponent(outsideTemperatureAttribute.unit)}`;

    // Rain
    const rainNode = nodes.find((node) => node.id === 258);
    const rainAttribute = rainNode.attributes.find(
        (attribute) => attribute.type === ENUMS.AttributeType.FloodAlarm
    );
    const rain = rainAttribute.current_value > 0 ? 'Es regnet' : 'Kein Regen';

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=600, stale-while-revalidate=1200'
    );

    return res.status(200).json({
        temperature,
        humidity,
        energy,
        lights,
        outsideTemperature,
        rain
    });
};
