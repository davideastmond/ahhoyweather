import dayjs, { Dayjs } from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";

export function getLocalTime(unixDateTime: number, timeZone: string): Dayjs {
  dayjs.extend(timezone);
  dayjs.extend(utc);
  dayjs.extend(weekday);
  return dayjs(unixDateTime * 1000).tz(timeZone);
}
