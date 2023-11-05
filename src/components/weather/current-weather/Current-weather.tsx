import { Box, Typography, styled } from "@mui/material";
import { PirateClientForeCastResult } from "../../../data/locations/models/pirate-client-forecast-result";
import { COLOR_PALLET } from "../../../stylings/color-pallet/color-pallet";
import { fontTheme } from "../../../stylings/fonts/font-theme";
import { formatDateTime } from "../../../utils/formatters/date-time-formatters";

import { formatPercentage } from "../../../utils/formatters/number-formatters";
import { formatTemperature } from "../../../utils/formatters/temperature-formatter";
import { formatWindSpeed } from "../../../utils/formatters/wind-formatters";
import { StyledCardContainer } from "../../containers/styled-card-container/StyledCardContainer";
import WeatherIconComponent, {
  IconSize,
} from "../../searchable-text-bar/weather-icon/Weather-Icon";
import WeatherDataCard from "../weather-data-card/Weather-data-card";

/*
Sky Conditions
Time
Temperature
Wind
Visibilitly
*/

// Shows current weather
interface CurrentWeatherComponentProps {
  data: Partial<PirateClientForeCastResult>;
  title: string;
}

function CurrentWeatherComponent({
  data,
  title,
}: CurrentWeatherComponentProps) {
  return (
    <StyledCardContainer
      component={"div"}
      mt={2}
      className="styled-card-container"
    >
      <Box>
        <Box id="location-title">
          <Typography color={COLOR_PALLET.paynesGray.hex}>{title}</Typography>
        </Box>
        <Typography>
          {formatDateTime(data.currently?.time!, data.timezone!)}
        </Typography>
      </Box>
      {/* Icon section for current weather */}
      <Box
        id="current-conditions-icon"
        display={"flex"}
        alignContent={"left"}
        flexWrap={"wrap"}
      >
        <WeatherIconComponent icon={data.currently?.icon!} size={IconSize.md} />
        <Box ml={2}>
          <Typography
            fontSize={fontTheme.currentWeather.temperature.titleFontSize}
            color={COLOR_PALLET.putridGelb.hex}
          >
            {formatTemperature(data.currently?.temperature!, data.flags?.units)}
          </Typography>
        </Box>
        <Box ml={2}>
          <Typography
            sx={{
              alignSelf: "flex-end",
              mt: 4,
              fontSize: fontTheme.currentWeather.descripition.titleFontSize,
            }}
          >
            {data.currently?.summary}
          </Typography>
        </Box>
      </Box>
      <FlexContentBox component={"div"} display="flex" id="details">
        <WeatherDataCard
          label="feels-like"
          title="Feels like"
          titleStylings={{
            fontSize: fontTheme.currentWeather.weatherDataCard.titleFontSize,
          }}
          content={formatTemperature(
            data.currently?.apparentTemperature!,
            data.flags?.units
          )}
          containerStylings={{ marginLeft: 2 }}
        />
        <WeatherDataCard
          label="humidity"
          title="Humidity"
          titleStylings={{
            fontSize: fontTheme.currentWeather.weatherDataCard.titleFontSize,
          }}
          content={formatPercentage(data.currently?.humidity!)}
          containerStylings={{ marginLeft: 2 }}
        />
        <WeatherDataCard
          label="wind-speed"
          title="Wind speed"
          content={formatWindSpeed(
            data.currently?.windSpeed!,
            data.currently?.windBearing,
            data.flags?.units
          )}
          containerStylings={{ marginLeft: 2 }}
          children={[
            <WeatherDataCard
              label="wind-gust"
              title={"Wind gust"}
              content={formatWindSpeed(
                data.currently?.windGust!,
                data.currently?.windBearing,
                data.flags?.units
              )}
            />,
          ]}
        />
      </FlexContentBox>
    </StyledCardContainer>
  );
}

const FlexContentBox = styled(Box)((props) => ({
  [props.theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
export { CurrentWeatherComponent };
