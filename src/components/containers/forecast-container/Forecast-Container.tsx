import { Box } from "@mui/material";
import { PirateClientForecastResult } from "../../../data/locations/models/pirate-client-forecast-result";
import { CurrentWeatherComponent } from "../../weather/current-weather/Current-weather";
import { SevenDayForecastContainerComponent } from "../../weather/seven-day-forecast/container/Seven-day-forecast-container.component";
import { ShortTermContainerComponent } from "../../weather/short-term-forecast/container/Short-term-container.component";

interface ForecastContainerProps {
  title: string; //
  data?: PirateClientForecastResult;
}

export function ForecastContainer({ title, data }: ForecastContainerProps) {
  if (!data) return null;
  return (
    <Box component={"div"} mt={2}>
      <CurrentWeatherComponent data={data} title={title} />
      <ShortTermContainerComponent data={data} />
      <SevenDayForecastContainerComponent data={data} />
    </Box>
  );
}
