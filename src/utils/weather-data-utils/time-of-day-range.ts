import { PirateForecastData } from "../../data/locations/models/pirate-client-forecast-result";
import {
  SHORT_TERM_FORECAST_RANGE,
  TimeOfDay,
} from "../../data/locations/models/short-term-forcast-ranges";
import { getLocalTime } from "../date-time";

export function getTimeOfDayRangeForecast(
  hourlyData: PirateForecastData[],
  timeZone: string
): Record<TimeOfDay, PirateForecastData> {
  const result: Partial<Record<TimeOfDay, PirateForecastData>> = {};

  for (const data of hourlyData) {
    const range: TimeOfDay = extractTimeRange(
      extractHourOfDay(data.time, timeZone)
    );
    if (!result[range]) {
      result[range] = data;
    }
  }
  return result as Record<TimeOfDay, PirateForecastData>;
}

function extractHourOfDay(time: number, timeZone: string): number {
  return getLocalTime(time, timeZone).hour();
}

function extractTimeRange(hourOfDay: number): TimeOfDay {
  const res = SHORT_TERM_FORECAST_RANGE.filter((range) => {
    return hourOfDay <= range.max && hourOfDay >= range.min;
  })[0];

  console.log(res);
  return res.timeOfDay;
}
