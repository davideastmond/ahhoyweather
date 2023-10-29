import { PirateClientDailyResult } from "../../../data/locations/models/pirate-client-forecast-result";
import { Unit } from "../../../data/unit";

import { StyledCardContainer } from "../../containers/styled-card-container/StyledCardContainer";
import WeatherIconComponent, {
  IconSize,
} from "../../searchable-text-bar/weather-icon/Weather-Icon";
import {
  DateComponent,
  PrecipitationAmountComponent,
  ProbabilityOfPrecipitationComponent,
  TemperatureComponent,
  WeatherSummaryComponent,
  WindComponent,
} from "./seven-day-forecast.resources";

interface SevenDayForecastCardProps {
  element: PirateClientDailyResult;
  unit: Unit;
  timezone: string;
  containerStylings?: { [keyof: string]: string | number };
}

/* 
  Each card is a long slim thingy, should have
  1. Short Date: Mon 10/01
  2. Weather Icon\
  3., Summary
  4. Temp High
  5. Temp Hight Feels like
  6. Temp Low
  7. Probability of Precip.
  8. Wind
  9. Wind Gust
  10. Precipitation Amount
  */
function SevenDayForecastCard({
  element,
  timezone,
  unit,
}: SevenDayForecastCardProps) {
  return (
    <StyledCardContainer mt={2} maxWidth={"fit-content"}>
      <DateComponent element={element} timezone={timezone} />
      <WeatherSummaryComponent element={element} />
      <WeatherIconComponent size={IconSize.sm} icon={element.icon} />
      <TemperatureComponent element={element} unit={unit} />
      <ProbabilityOfPrecipitationComponent element={element} />
      <WindComponent element={element} unit={unit} />
      <PrecipitationAmountComponent element={element} unit={unit} />
    </StyledCardContainer>
  );
}

export default SevenDayForecastCard;
