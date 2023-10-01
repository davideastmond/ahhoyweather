import { isNil } from "lodash";
import { WindBearing } from "../../data/locations/models/wind-bearings";
import { Unit } from "../../data/unit";

export function formatWindSpeed(
  windSpeed: number,
  windBearing?: number,
  unit?: Unit
): string {
  if (isNil(windSpeed)) return "";
  switch (unit) {
    case "si":
      return `${windSpeed} km/h ${getWindBearing(windBearing) || ""}`;
    case "us":
      return `${windSpeed} mph ${getWindBearing(windBearing) || ""}`;
    default:
      // Default is si
      return `${windSpeed} km/h ${getWindBearing(windBearing) || ""}`;
  }
}

function getWindBearing(windBearing?: number): string | undefined {
  if (!windBearing) return undefined;

  const bearings: WindBearing = {
    n: {
      min: 0,
      max: 22.4,
    },
    nne: {
      min: 22.5,
      max: 44.9,
    },
    ne: {
      min: 45,
      max: 67.4,
    },
    ene: {
      min: 67.5,
      max: 89.9,
    },
    e: {
      min: 90,
      max: 112.4,
    },
    ese: {
      min: 112.5,
      max: 134.9,
    },
    se: {
      min: 135,
      max: 157.4,
    },
    sse: {
      min: 157.5,
      max: 179.9,
    },
    s: {
      min: 180,
      max: 202.4,
    },
    ssw: {
      min: 202.5,
      max: 224.9,
    },
    sw: {
      min: 225,
      max: 247.4,
    },
    wsw: {
      min: 247.5,
      max: 269.9,
    },
    w: {
      min: 270,
      max: 292.4,
    },
    wnw: {
      min: 292.5,
      max: 314.9,
    },
    nw: {
      min: 315,
      max: 337.4,
    },
    nnw: {
      min: 337.5,
      max: 359.9,
    },
  };
  return Object.entries(bearings)
    .filter(([, value]) => {
      return windBearing >= value.min && windBearing <= value.max;
    })[0][0]
    .toLocaleUpperCase();
}
