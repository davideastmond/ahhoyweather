import AirIcon from "@mui/icons-material/Air";
import { Box, Typography } from "@mui/material";
import { PirateForecastData } from "../../../data/locations/models/pirate-client-forecast-result";
import { TimeOfDay } from "../../../data/locations/models/short-term-forcast-ranges";
import { Unit } from "../../../data/unit";
import { COLOR_PALLET } from "../../../stylings/color-pallet/color-pallet";
import { fontTheme } from "../../../stylings/fonts/font-theme";

import { capitalizeFirstLetter } from "../../../utils/formatters/string-formatters";
import { formatTemperature } from "../../../utils/formatters/temperature-formatter";
import { formatWindSpeed } from "../../../utils/formatters/wind-formatters";
import { StyledCardContainer } from "../../containers/styled-card-container/StyledCardContainer";
import WeatherIconComponent, {
  IconSize,
} from "../../searchable-text-bar/weather-icon/Weather-Icon";

interface ShortTermWeatherCardProps {
  element: PirateForecastData;
  containerStylings?: { [keyof: string]: string | number };
  timeOfDay: TimeOfDay;
  unit: Unit;
}
/**
 * Weather Icon, Temp, Feels like, Wind, POP
 * @param param0
 * @returns
 */
function ShortTermWeatherCard({
  element,
  timeOfDay,
  containerStylings,
  unit,
}: ShortTermWeatherCardProps) {
  return (
    <StyledCardContainer
      display={"flex"}
      flexDirection={"column"}
      {...containerStylings}
      mt={2}
      className="styled-card-container"
    >
      <Box>
        <Typography>{capitalizeFirstLetter(timeOfDay)}</Typography>
      </Box>
      <Box display="flex">
        {WeatherIconAndCondition(element)}
        {TemperatureComponent(element, unit)}
        {WindComponent(element, unit)}
      </Box>
    </StyledCardContainer>
  );
}

const WeatherIconAndCondition = (element: PirateForecastData) => (
  <Box
    display={"flex"}
    flexDirection={"column"}
    justifyContent={"space-evenly"}
  >
    <WeatherIconComponent size={IconSize.sm} icon={element.icon} />
    <Typography
      textAlign={"center"}
      fontSize={
        fontTheme.ShortTermWeather.weatherDataCard.weatherDescription
          .titleFontSize
      }
    >
      {element.summary}
    </Typography>
  </Box>
);

const TemperatureComponent = (element: PirateForecastData, unit: Unit) => (
  <Box display="flex" alignContent={"center"} ml={2} flexDirection={"column"}>
    <Typography
      fontSize={
        fontTheme.ShortTermWeather.weatherDataCard.temperature.main
          .titleFontSize
      }
    >
      {formatTemperature(element.temperature, unit)}
    </Typography>
    <Box display="flex" flexDirection={"column"}>
      <Typography
        color={COLOR_PALLET.lightBlue.hex}
        fontSize={
          fontTheme.ShortTermWeather.weatherDataCard.temperature
            .apparentTemperature.title.titleFontSize
        }
      >
        Feels like
      </Typography>
      <Typography
        fontSize={
          fontTheme.ShortTermWeather.weatherDataCard.temperature
            .apparentTemperature.main.titleFontSize
        }
      >
        {formatTemperature(element.apparentTemperature, unit)}
      </Typography>
    </Box>
  </Box>
);

const WindComponent = (element: PirateForecastData, unit: Unit) => (
  <Box display="flex" alignContent={"center"} ml={2} flexDirection={"column"}>
    <Box display="flex" alignContent={"center"} ml={2} flexDirection={"column"}>
      <AirIcon sx={{ fontSize: "20px" }} />
      <Typography
        fontSize={
          fontTheme.ShortTermWeather.weatherDataCard.wind.main.titleFontSize
        }
      >
        {formatWindSpeed(element.windSpeed, element.windBearing, unit)}
      </Typography>
      <Box>
        <Typography
          sx={{ color: COLOR_PALLET.lightBlue.hex }}
          fontSize={
            fontTheme.ShortTermWeather.weatherDataCard.wind.gust.title
              .titleFontSize
          }
        >
          Gust
        </Typography>
        <Typography
          fontSize={
            fontTheme.ShortTermWeather.weatherDataCard.wind.main.titleFontSize
          }
        >
          {formatWindSpeed(element.windGust, element.windBearing, unit)}
        </Typography>
      </Box>
    </Box>
  </Box>
);
export default ShortTermWeatherCard;
