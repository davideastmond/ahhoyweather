import { Unit } from "../../unit";

export interface PirateClientForeCastResult {
  latitude: number;
  longitude: number;
  timezone: string;
  currently: PirateForecastData;
  daily: {
    data: PirateClientDailyResult[];
  };
  hourly: {
    data: PirateForecastData[];
  };
  alerts: string[];
  flags: {
    units: Unit;
  };
}

export interface PirateForecastData {
  time: number; // unix
  summary: string;
  icon: WeatherIcon;
  precipProbability: number;
  precipType: PrecipitationType;
  temperature: number;
  apparentTemperature: number;
  humidity: number; // float
  pressure: number;
  windSpeed: number;
  windGust: number;
  windBearing: number;
  uvIndex: number;
}

export interface PirateClientDailyResult extends PirateForecastData {
  sunriseTime: number;
  sunsetTime: number;
  temperatureHigh: number;
  temperatureLow: number;
  apparentTemperatureHigh: number;
  apparentTemperatureLow: number;
  precipAccumulation: number;
  precipType: PrecipitationType;
}

export enum WeatherIcon {
  ClearDay = "clear-day",
  ClearNight = "clear-night",
  Rain = "rain",
  Snow = "snow",
  Sleet = "sleet",
  Wind = "wind",
  Fog = "fog",
  Cloudy = "cloudy",
  PartlyCloudyDay = "partly-cloudy-day",
  PartlyCloudyNight = "partly-cloudy-night",
}

export enum PrecipitationType {
  Rain = "rain",
  Snow = "snow",
  Sleet = "sleet",
  None = "none",
}
