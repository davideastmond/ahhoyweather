import {
  Alert,
  Box,
  CircularProgress,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { PirateWeatherClient } from "../../clients/pirate-weather/pirate-weather-client";
import { ForecastContainer } from "../../components/containers/forecast-container/Forecast-Container";
import { LeafletMapContainer } from "../../components/containers/leaflet-map-container/Leaflet-map-container";
import SearchableTextBar from "../../components/searchable-text-bar/Searchable-text-bar.component";
import { UnitsToggle } from "../../components/units-toggle/Units-toggle";
import { Coords } from "../../data/locations/models/coords";
import { PirateClientForecastResult } from "../../data/locations/models/pirate-client-forecast-result";
import { Unit } from "../../data/unit";
import { COLOR_PALLET } from "../../stylings/color-pallet/color-pallet";
import { initializeUnits } from "../../utils/storage/unit-utils/unit-utils";

function HomePage() {
  const [forecastData, setForecastData] = useState<
    PirateClientForecastResult | undefined
  >(undefined);
  const [forecastDataTitle, setForecastDataTitle] = useState<string>("");
  const [units, setUnits] = useState<string>("");
  const [stateCoords, setStateCoords] = useState<Coords | null>(null);
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const onLocationMenuItemClicked = async ({
    place_name,
    coords,
  }: {
    place_name: string;
    coords: Coords;
  }) => {
    resetErrorMessages();
    setIsBusy(true);
    try {
      const res = await fetchForcast(coords, units as Unit);
      setStateCoords(coords);
      setForecastData(res);
      setForecastDataTitle(place_name);
    } catch (exception: any) {
      setHasError(true);
      setErrorMessage("Sorry, we ran into a problem.");
    } finally {
      setIsBusy(false);
    }
  };

  useEffect(() => {
    // On load, attempt to get the units from localStorage
    initializeUnits(setUnits);
  }, []);

  const handleUnitsToggle = async (unitSelected: Unit) => {
    localStorage.setItem("unit", unitSelected);
    setUnits(unitSelected);
    if (stateCoords) {
      try {
        resetErrorMessages();
        setIsBusy(true);
        const res = await fetchForcast(stateCoords, unitSelected);
        setForecastData(res);
        setIsBusy(false);
      } catch (exception: any) {
        setHasError(true);
        setErrorMessage("Sorry, we ran into a problem.");
        setIsBusy(false);
      }
    }
  };

  const fetchForcast = async (
    coordinates: Coords,
    selectedUnit: Unit
  ): Promise<PirateClientForecastResult> => {
    const pirateClient: PirateWeatherClient = new PirateWeatherClient();
    return pirateClient.getForcast(coordinates, selectedUnit);
  };

  const handleSearchBoxError = (message: string) => {
    setHasError(true);
    setErrorMessage(message);
  };

  const resetErrorMessages = () => {
    setHasError(false);
    setErrorMessage("");
  };

  const renderContent = () => {
    if (isBusy)
      return (
        <Box display="flex" justifyContent={"center"} padding={2}>
          {" "}
          <CircularProgress />{" "}
        </Box>
      );

    return (
      <>
        <Box component={"form"}>
          <SearchableTextBar
            label="Search"
            onLocationMenuItemClicked={onLocationMenuItemClicked}
            onSearchError={handleSearchBoxError}
          />
        </Box>
        <Box display="flex" justifyContent={"center"} pt={3} pb={3}>
          {stateCoords && <LeafletMapContainer coords={stateCoords} />}
        </Box>
        <Box id="forecast-container">
          <ForecastContainer data={forecastData} title={forecastDataTitle} />
        </Box>
      </>
    );
  };

  return (
    <Box>
      <Box justifyContent={"right"} display="flex">
        <UnitsToggle
          onToggle={handleUnitsToggle}
          propsChecked={units !== Unit.SI}
          disabled={isBusy}
        />
      </Box>
      <AppTitleText />
      {renderContent()}
      {/* Display an error*/}
      {hasError && (
        <Box mt={1}>
          <CustomStyledAlert severity="error">{errorMessage}</CustomStyledAlert>
        </Box>
      )}
    </Box>
  );
}

const CustomStyledAlert = styled(Alert)(() => ({
  "&.MuiAlert-root": {
    background: "none",
  },
}));

const StylizedTitle = styled(Typography)(() => ({
  "&.MuiTypography-root": {
    textShadow: `0.3rem 0.3rem ${COLOR_PALLET.charcoal.hex}`,
    transform: "rotate(-5deg)",
    color: COLOR_PALLET.ghostWhite.hex,
    fontSize: "6rem",
    fontFamily: "Georgia",
    textTransform: "uppercase",
  },
}));

const StylizedSubtitle = styled(Typography)(() => ({
  "&.MuiTypography-root": {
    color: COLOR_PALLET.ghostWhite.hex,
    fontFamily: "Georgia",
    textTransform: "uppercase",
    fontSize: "2rem",
  },
}));

function AppTitleText() {
  return (
    <>
      <Box component={"header"} mt={2}>
        <StylizedTitle textAlign={"center"} color={COLOR_PALLET.ghostWhite.hex}>
          Ahoy!
        </StylizedTitle>
        <StylizedSubtitle textAlign={"center"}>Weather</StylizedSubtitle>
      </Box>
    </>
  );
}
export default HomePage;
