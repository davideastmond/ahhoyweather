import { Box, Typography } from "@mui/material";
import { PirateClientForeCastResult } from "../../../data/locations/models/pirate-client-forecast-result";
import { COLOR_PALLET } from "../../../stylings/color-pallet/color-pallet";
import { CurrentWeatherComponent } from "../../weather/current-weather/Current-weather";
import { ShortTermContainerComponent } from "../../weather/short-term-forecast/container/Short-term-container.component";

interface ForecastContainerProps {
  title: string; //
  data?: PirateClientForeCastResult;
}

export function ForecastContainer({ title, data }: ForecastContainerProps) {
  if (!data) return null;
  return (
    <Box component={"div"} mt={2}>
      <Typography
        variant="h6"
        color={COLOR_PALLET.ghostWhite.hex}
        textAlign={"center"}
      >
        {title}
      </Typography>
      <CurrentWeatherComponent data={data} />
      <ShortTermContainerComponent data={data} />
    </Box>
  );
}
