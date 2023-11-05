import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionSummary, Box, Typography } from "@mui/material";
import { PirateClientForecastResult } from "../../../../data/locations/models/pirate-client-forecast-result";
import { TimeOfDay } from "../../../../data/locations/models/short-term-forcast-ranges";
import { getTimeOfDayRangeForecast } from "../../../../utils/weather-data-utils/time-of-day-range";
import {
  CustomStyledAccordionDetails,
  StyledAccordion,
} from "../../../containers/Styled-accordion/Styled-accordion";
import ShortTermWeatherCard from "../Short-term-weather-card";

interface ShortTermContainerProps {
  data: PirateClientForecastResult;
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
      unit={props.data.flags.units}
    />
  ));
}
