import { WEATHER_ICONS } from "../../../assets/weather-icons";
import { WeatherIcon } from "../../../data/locations/models/pirate-client-forecast-result";

export enum IconSize {
  sm = "sm",
  md = "md",
  lg = "lg",
}
interface WeatherIconProps {
  size: IconSize;
  icon: WeatherIcon;
}

function WeatherIconComponent(props: WeatherIconProps) {
  return (
    <img
      src={WEATHER_ICONS[props.icon]}
      width={"auto"}
      height={getIconSize(props.size)}
      alt={props.icon}
    />
  );
}

function getIconSize(iconSize: IconSize): string {
  switch (iconSize) {
    case IconSize.sm:
      return "50px";
    case IconSize.md:
      return "100px";
    case IconSize.lg:
      return "200px";
  }
}

export default WeatherIconComponent;
