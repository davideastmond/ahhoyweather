export interface ShortTermForecastRange {
  min: number;
  max: number;
  timeOfDay: TimeOfDay;
}

export enum TimeOfDay {
  Overnight = "overnight",
  Morning = "morning",
  Afternoon = "afternoon",
  Evening = "evening",
  Night = "night",
}

export const SHORT_TERM_FORECAST_RANGE: ShortTermForecastRange[] = [
  {
    min: 0,
    max: 3,
    timeOfDay: TimeOfDay.Overnight,
  },
  {
    min: 4,
    max: 11,
    timeOfDay: TimeOfDay.Morning,
  },
  {
    min: 12,
    max: 16,
    timeOfDay: TimeOfDay.Afternoon,
  },
  {
    min: 17,
    max: 20,
    timeOfDay: TimeOfDay.Evening,
  },
  {
    min: 21,
    max: 23,
    timeOfDay: TimeOfDay.Night,
  },
];
