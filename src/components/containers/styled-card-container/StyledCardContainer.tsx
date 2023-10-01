import { Box, styled } from "@mui/material";
import { COLOR_PALLET } from "../../../stylings/color-pallet/color-pallet";

export const StyledCardContainer = styled(Box)(() => ({
  borderColor: COLOR_PALLET.lightBlue.hex,
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: "20px",
  padding: "20px",
}));
