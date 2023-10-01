import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  styled,
} from "@mui/material";
import { PirateClientForeCastResult } from "../../../../data/locations/models/pirate-client-forecast-result";
import { TimeOfDay } from "../../../../data/locations/models/short-term-forcast-ranges";
import { COLOR_PALLET } from "../../../../stylings/color-pallet/color-pallet";
import { getTimeOfDayRangeForecast } from "../../../../utils/weather-data-utils/time-of-day-range";
import ShortTermWeatherCard from "../Short-term-weather-card";

interface ShortTermContainerProps {
  data: PirateClientForeCastResult;
}
export function ShortTermContainerComponent(props: ShortTermContainerProps) {
  return (
    <Box mt={2}>
      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="short-term-forecast-summary-content"
          id="short-term-forecast-accordion"
        >
          <Typography>Short-term Forecast</Typography>
        </AccordionSummary>
        <CustomStyledAccordionDetails>
          {getDetails(props)}
        </CustomStyledAccordionDetails>
      </StyledAccordion>
    </Box>
  );
}

function getDetails(props: ShortTermContainerProps): JSX.Element[] {
  return Object.entries(
    getTimeOfDayRangeForecast(props.data.hourly.data, props.data.timezone)
  ).map(([timeOfDay, forecastData]) => (
    <ShortTermWeatherCard
      element={forecastData}
      timeOfDay={timeOfDay as TimeOfDay}
    />
  ));
}

const StyledAccordion = styled(Accordion)(() => ({
  "&.MuiAccordion-root": {
    border: `1px solid ${COLOR_PALLET.lightBlue.hex}`,
    borderRadius: "20px",
  },
  "& .MuiButtonBase-root": {
    backgroundColor: COLOR_PALLET.midnight.hex,
    borderTop: `1px solid ${COLOR_PALLET.lightBlue.hex}`,
    borderRadius: "20px",
    paddingBottom: "2px ",
  },
  "& .MuiCollapse-root": {
    backgroundColor: COLOR_PALLET.midnight.hex,
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
  },
  "& .Mui-expanded": {
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  },
}));

const CustomStyledAccordionDetails = styled(AccordionDetails)((props) => ({
  "&.MuiAccordionDetails-root": {
    border: "0",
  },
  [props.theme.breakpoints.up("lg")]: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    borderRadius: "20px",
    border: `1px solid ${COLOR_PALLET.lightBlue.hex}`,
  },
}));
