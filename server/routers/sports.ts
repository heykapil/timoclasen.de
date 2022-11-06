import { formatRelative, parseISO } from 'date-fns';
import { de } from 'date-fns/locale';
import { utcToZonedTime } from 'date-fns-tz';

import { getMapURLs } from '../../lib/mapbox';
import {
  formatSpeed,
  formatTime,
  getActivities,
  roundDistance,
} from '../../lib/strava';
import { publicProcedure, router } from '../trpc';

export const sportsRouter = router({
  running: publicProcedure.query(async () => {
    const activites = await getActivities();
    const runs = activites.filter((activity) => activity.type === 'Run');

    const {
      distance: distanceThisYear,
      farthest: farthestThisYear,
      fastest: fastestThisYear,
      longest: longestThisYear,
      lowest: lowestThisYear,
    } = runs.reduce(
      (thisYear, activity) => {
        return {
          distance: thisYear.distance + activity.distance,
          farthest:
            activity.distance > thisYear.farthest
              ? activity.distance
              : thisYear.farthest,
          fastest:
            activity.average_speed > thisYear.fastest
              ? activity.average_speed
              : thisYear.fastest,
          longest:
            activity.moving_time > thisYear.longest
              ? activity.moving_time
              : thisYear.longest,
          lowest:
            activity.average_heartrate < thisYear.lowest
              ? activity.average_heartrate
              : thisYear.lowest,
        };
      },
      {
        distance: 0,
        farthest: 0,
        fastest: 0,
        longest: 0,
        lowest: 1000,
      }
    );

    const lastRun = runs.reduce((lastRun, activity) => {
      return parseISO(activity.start_date).getTime() >
        parseISO(lastRun.start_date).getTime()
        ? activity
        : lastRun;
    }, runs[0]);

    return {
      thisYear: {
        distance: Math.round(distanceThisYear / 1000),
        fastest: fastestThisYear,
        farthest: farthestThisYear,
        lowest: lowestThisYear,
        longest: longestThisYear,
      },
      lastRun: {
        date: {
          raw: lastRun.start_date,
          relative: capitalizeFirstLetter(
            formatRelative(
              utcToZonedTime(
                parseISO(lastRun.start_date),
                lastRun.timezone.split(' ')[1]
              ),
              utcToZonedTime(new Date(), lastRun.timezone.split(' ')[1]),
              {
                locale: de,
                weekStartsOn: 1, // Monday
              }
            )
          ),
          timezone: lastRun.timezone,
        },
        distance: {
          raw: lastRun.distance,
          formatted: `${roundDistance(lastRun.distance / 1000)} km`,
        },
        avgSpeed: {
          raw: lastRun.average_speed,
          formatted: formatSpeed(lastRun.average_speed),
        },
        time: {
          raw: lastRun.moving_time,
          formatted: formatTime(lastRun.moving_time),
        },
        avgHeartrate: {
          raw: lastRun.average_heartrate,
          formatted: `${Math.round(lastRun.average_heartrate)} bpm`,
        },
        map: getMapURLs(lastRun.map.summary_polyline ?? ''),
        url: `https://www.strava.com/activities/${lastRun.id}`,
        kudos: lastRun.kudos_count,
        stroller: lastRun.name.includes('Kinderwagen'),
        race: lastRun.workout_type === 1,
      },
    };
  }),
});

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
