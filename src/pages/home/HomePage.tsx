import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { PirateWeatherClient } from "../../clients/pirate-weather/pirate-weather-client";
import { ForecastContainer } from "../../components/containers/forecast-container/Forecast-Container";
import SearchableTextBar from "../../components/searchable-text-bar/Searchable-text-bar.component";
import { Coords } from "../../data/locations/models/coords";
import { PirateClientForeCastResult } from "../../data/locations/models/pirate-client-forecast-result";
import { COLOR_PALLET } from "../../stylings/color-pallet/color-pallet";
function HomePage() {
  const [forecastData, setForecastData] = useState<
    PirateClientForeCastResult | undefined
  >(undefined);
  const [forecastDataTitle, setForecastDataTitle] = useState<string>("");
  const onLocationMenuItemClicked = async ({
    place_name,
    coords,
  }: {
    place_name: string;
    coords: Coords;
  }) => {
    const pirateClient: PirateWeatherClient = new PirateWeatherClient();
    const res: PirateClientForeCastResult = await pirateClient.getForcast(
      coords
    );
    setForecastData(res);
    setForecastDataTitle(place_name);
    console.log(place_name);
  };
  return (
    <Box>
      <header>
        <Typography
          variant="h2"
          textAlign={"center"}
          color={COLOR_PALLET.ghostWhite.hex}
        >
          Ah-hoy Weather
        </Typography>
      </header>
      <Box component={"form"}>
        <SearchableTextBar
          label="Search"
          onLocationMenuItemClicked={onLocationMenuItemClicked}
        />
      </Box>
      <Box id="forecast-container">
        <ForecastContainer data={forecastData} title={forecastDataTitle} />
      </Box>
    </Box>
  );
}

export default HomePage;
