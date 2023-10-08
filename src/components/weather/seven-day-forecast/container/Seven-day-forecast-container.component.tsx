import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionSummary, Box, Typography } from "@mui/material";
import { PirateClientForeCastResult } from "../../../../data/locations/models/pirate-client-forecast-result";
import {
  CustomStyledAccordionDetails,
  StyledAccordion,
} from "../../../containers/Styled-accordion/Styled-accordion";
import SevenDayForecastCard from "../Seven-day-forecast-card";
interface SevenDayForecastContainerProps {
  data: PirateClientForeCastResult;
}
export function SevenDayForecastContainerComponent(
  props: SevenDayForecastContainerProps
) {
  return (
    <Box mt={2}>
      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="seven-day-forecast-summary-content"
          id="seven-day-forecast-accordion"
        >
          <Typography>Next 7 Days</Typography>
        </AccordionSummary>
        <CustomStyledAccordionDetails>
          <Box display="flex" justifyContent="space-between" flexWrap={"wrap"}>
            {props.data.daily.data.map((dailyData) => (
              <SevenDayForecastCard
                element={dailyData}
                timezone={props.data.timezone}
                unit={props.data.flags.units}
              />
            ))}
          </Box>
        </CustomStyledAccordionDetails>
      </StyledAccordion>
    </Box>
  );
}
