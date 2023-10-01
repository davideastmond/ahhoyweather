import { PirateClientForeCastResult } from "../../../../data/locations/models/pirate-client-forecast-result";
import { TimeOfDay } from "../../../../data/locations/models/short-term-forcast-ranges";
import { getTimeOfDayRangeForecast } from "../../../../utils/weather-data-utils/time-of-day-range";
import ShortTermWeatherCard from "../Short-term-weather-card";

interface ShortTermContainerProps {
  data: PirateClientForeCastResult;
}
export function ShortTermContainerComponent(props: ShortTermContainerProps) {
  return Object.entries(
    getTimeOfDayRangeForecast(props.data.hourly.data, props.data.timezone)
  ).map(([timeOfDay, forecastData]) => (
    <ShortTermWeatherCard
      element={forecastData}
      timeOfDay={timeOfDay as TimeOfDay}
    />
  ));
}
