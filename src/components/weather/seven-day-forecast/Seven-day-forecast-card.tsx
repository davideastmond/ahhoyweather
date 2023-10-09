import { Box, Typography, styled } from "@mui/material";
import {
  PirateClientDailyResult,
  PirateForecastData,
  PrecipitationType,
} from "../../../data/locations/models/pirate-client-forecast-result";
import { Unit } from "../../../data/unit";
import { COLOR_PALLET } from "../../../stylings/color-pallet/color-pallet";
import { fontTheme } from "../../../stylings/fonts/font-theme";
import {
  getDayOfWeek,
  getShortMonthDate,
} from "../../../utils/formatters/date-time-formatters";

import { formatPercentage } from "../../../utils/formatters/number-formatters";
import { formatPrecipitation } from "../../../utils/formatters/precipitation-formatter";
import { capitalizeFirstLetter } from "../../../utils/formatters/string-formatters";
import { formatTemperature } from "../../../utils/formatters/temperature-formatter";
import { formatWindSpeed } from "../../../utils/formatters/wind-formatters";
import { StyledCardContainer } from "../../containers/styled-card-container/StyledCardContainer";
import WeatherIconComponent, {
  IconSize,
} from "../../searchable-text-bar/weather-icon/Weather-Icon";

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
      {DateComponent(element, timezone)}
      {WeatherSummaryComponent(element)}
      <WeatherIconComponent size={IconSize.sm} icon={element.icon} />
      {TemperatureComponent(element, unit)}
      {ProbabilityOfPrecipitationComponent(element)}
      {WindComponent(element, unit)}
      {PrecipitationAmountComponent(element, unit)}
    </StyledCardContainer>
  );
}

const DateComponent = (element: PirateForecastData, timezone: string) => (
  <Box>
    <Box display={"flex"} flexDirection={"column"}>
      <Typography
        className="dayOfWeek"
        fontSize={fontTheme.SevenDay.weatherDataCard.dayOfWeek.titleFontSize}
        fontWeight={"bold"}
      >
        {getDayOfWeek(element.time, timezone)}
      </Typography>
      <Typography>{getShortMonthDate(element.time, timezone)}</Typography>
    </Box>
  </Box>
);

const WeatherSummaryComponent = (element: PirateForecastData) => (
  <Box>
    <Typography className="seven-day-day-weather-description">
      {element.summary}
    </Typography>
  </Box>
);

const TemperatureComponent = (element: PirateClientDailyResult, unit: Unit) => (
  <Box display="flex" flexDirection={"column"}>
    <Typography
      fontSize={
        fontTheme.SevenDay.weatherDataCard.temperature.temperatureHigh
          .titleFontSize
      }
    >
      {formatTemperature(element.temperatureHigh, unit)}
    </Typography>
    <Box mt={2}>
      <Typography
        sx={{ color: COLOR_PALLET.lightBlue.hex }}
        fontSize={
          fontTheme.SevenDay.weatherDataCard.temperature.apparentTemperature
            .high.title.titleFontSize
        }
      >
        Feels like
      </Typography>
      <Typography>
        {formatTemperature(element.apparentTemperatureHigh, unit)}
      </Typography>
    </Box>
    <Box>
      <Typography
        sx={{ color: COLOR_PALLET.lightBlue.hex }}
        fontSize={
          fontTheme.SevenDay.weatherDataCard.temperature.apparentTemperature.low
            .title.titleFontSize
        }
      >
        Low
      </Typography>
      <Typography>
        {formatTemperature(element.apparentTemperatureLow, unit)}
      </Typography>
    </Box>
  </Box>
);

const ProbabilityOfPrecipitationComponent = (
  element: PirateClientDailyResult
) => (
  <Box>
    <Typography
      sx={{ color: COLOR_PALLET.lightBlue.hex }}
      fontSize={
        fontTheme.SevenDay.weatherDataCard.probabilityOfPrecipitation.title
          .titleFontSize
      }
    >
      POP
    </Typography>
    <Typography>{formatPercentage(element.precipProbability)}</Typography>
  </Box>
);

const WindComponent = (element: PirateClientDailyResult, unit: Unit) => (
  <BoxGrid>
    <Typography
      sx={{ color: COLOR_PALLET.lightBlue.hex }}
      fontSize={
        fontTheme.SevenDay.weatherDataCard.wind.speed.title.titleFontSize
      }
    >
      Wind speed
    </Typography>
    <Typography
      ml={1}
      sx={{ color: COLOR_PALLET.lightBlue.hex }}
      fontSize={
        fontTheme.SevenDay.weatherDataCard.wind.gust.title.titleFontSize
      }
    >
      Gust
    </Typography>
    <Typography
      fontSize={
        fontTheme.SevenDay.weatherDataCard.wind.speed.main.titleFontSize
      }
    >
      {formatWindSpeed(element.windSpeed, element.windBearing, unit)}
    </Typography>
    <Typography
      ml={1}
      fontSize={fontTheme.SevenDay.weatherDataCard.wind.gust.main.titleFontSize}
    >
      {formatWindSpeed(element.windGust, element.windBearing, unit)}
    </Typography>
  </BoxGrid>
);

const PrecipitationAmountComponent = (
  element: PirateClientDailyResult,
  unit: Unit
) => {
  return (
    <Box>
      <Typography
        sx={{ color: COLOR_PALLET.lightBlue.hex }}
        fontSize={
          fontTheme.SevenDay.weatherDataCard.precipitationAccumulation
            .accumulation.title.titleFontSize
        }
      >
        Precip. Accum.
      </Typography>
      <Typography
        fontSize={
          fontTheme.SevenDay.weatherDataCard.precipitationAccumulation
            .precipitationType.title.titleFontSize
        }
      >
        {capitalizeFirstLetter(element.precipType)}
      </Typography>
      {element.precipType !== PrecipitationType.None && (
        <Typography
          fontSize={
            fontTheme.SevenDay.weatherDataCard.precipitationAccumulation
              .accumulation.main.titleFontSize
          }
        >
          {formatPrecipitation(element.precipAccumulation, unit)}
        </Typography>
      )}
    </Box>
  );
};

const BoxGrid = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "50% 50%",
}));

export default SevenDayForecastCard;
