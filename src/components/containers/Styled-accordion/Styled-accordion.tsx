import { Accordion, AccordionDetails, styled } from "@mui/material";
import { COLOR_PALLET } from "../../../stylings/color-pallet/color-pallet";

export const StyledAccordion = styled(Accordion)(() => ({
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

export const CustomStyledAccordionDetails = styled(AccordionDetails)(
  (props) => ({
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
  })
);
