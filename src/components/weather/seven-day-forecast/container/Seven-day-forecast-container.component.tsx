import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionSummary, Box, Typography } from "@mui/material";
import { PirateClientForecastResult } from "../../../../data/locations/models/pirate-client-forecast-result";
import {
  CustomStyledAccordionDetails,
  StyledAccordion,
} from "../../../containers/Styled-accordion/Styled-accordion";
import SevenDayForecastCard from "../Seven-day-forecast-card";
interface SevenDayForecastContainerProps {
  data: PirateClientForecastResult;
}
export function SevenDayForecastContainerComponent({
  data,
}: SevenDayForecastContainerProps) {
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
            {data.daily.data.map((dailyData) => (
              <SevenDayForecastCard
                element={dailyData}
                timezone={data.timezone}
                unit={data.flags.units}
              />
            ))}
          </Box>
        </CustomStyledAccordionDetails>
      </StyledAccordion>
    </Box>
  );
}
