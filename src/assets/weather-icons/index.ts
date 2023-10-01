import { WeatherIcon } from "../../data/locations/models/pirate-client-forecast-result";
import ClearDayIcon from "./clear-day.svg";
import ClearNightIcon from "./clear-night.svg";
import CloudyIcon from "./cloudy.svg";
import FogIcon from "./fog.svg";
import PartlyCloudyDayIcon from "./partly-cloudy-day.svg";
import PartlyCloudyNightIcon from "./partly-cloudy-night.svg";
import RainIcon from "./rain.svg";
import SleetIcon from "./sleet.svg";
import SnowIcon from "./snow.svg";
import WindIcon from "./wind.svg";

export const WEATHER_ICONS: { [key in WeatherIcon]: string } = {
  "clear-day": ClearDayIcon,
  "clear-night": ClearNightIcon,
  cloudy: CloudyIcon,
  fog: FogIcon,
  "partly-cloudy-day": PartlyCloudyDayIcon,
  "partly-cloudy-night": PartlyCloudyNightIcon,
  rain: RainIcon,
  sleet: SleetIcon,
  snow: SnowIcon,
  wind: WindIcon,
};
