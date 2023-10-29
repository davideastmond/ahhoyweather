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

interface DateComponentProps {
  element: PirateForecastData;
  timezone: string;
}

interface WeatherSummaryComponentProps {
  element: PirateForecastData;
}

interface TemperatureComponentProps {
  element: PirateClientDailyResult;
  unit: Unit;
}

interface ProbabilityOfPrecipitationComponentProps {
  element: PirateClientDailyResult;
}

export function DateComponent({ element, timezone }: DateComponentProps) {
  return (
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
}

export function WeatherSummaryComponent({
  element,
}: WeatherSummaryComponentProps) {
  return (
    <Box>
      <Typography className="seven-day-day-weather-description">
        {element.summary}
      </Typography>
    </Box>
  );
}

export function TemperatureComponent({
  element,
  unit,
}: TemperatureComponentProps) {
  return (
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
            fontTheme.SevenDay.weatherDataCard.temperature.apparentTemperature
              .low.title.titleFontSize
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
}

export function ProbabilityOfPrecipitationComponent({
  element,
}: ProbabilityOfPrecipitationComponentProps) {
  return (
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
}

interface WindComponentProps {
  element: PirateClientDailyResult;
  unit: Unit;
}
export function WindComponent({ element, unit }: WindComponentProps) {
  return (
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
        fontSize={
          fontTheme.SevenDay.weatherDataCard.wind.gust.main.titleFontSize
        }
      >
        {formatWindSpeed(element.windGust, element.windBearing, unit)}
      </Typography>
    </BoxGrid>
  );
}

interface PrecipitationAmountComponentProps {
  element: PirateClientDailyResult;
  unit: Unit;
}
export function PrecipitationAmountComponent({
  element,
  unit,
}: PrecipitationAmountComponentProps) {
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
          {formatPrecipitation(
            element.precipAccumulation,
            element.precipType,
            unit
          )}
        </Typography>
      )}
    </Box>
  );
}

const BoxGrid = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "50% 50%",
}));
