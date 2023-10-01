import { isNil } from "lodash";
import { getLocalTime } from "../date-time";

export function formatDateTime(
  unixDateTime: number,
  timeZone: string,
  customFormat?: string
): string {
  if (isNil(unixDateTime)) return "";
  const dateTimeStringFormat = customFormat
    ? customFormat
    : "dddd, MMMM D, YYYY h:mm A";

  return getLocalTime(unixDateTime, timeZone).format(dateTimeStringFormat);
}
