import dayjs, { Dayjs } from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

export function getLocalTime(unixDateTime: number, timeZone: string): Dayjs {
  dayjs.extend(timezone);
  dayjs.extend(utc);
  return dayjs(unixDateTime * 1000).tz(timeZone);
}
