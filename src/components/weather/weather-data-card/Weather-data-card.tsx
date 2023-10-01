import { Box, Typography } from "@mui/material";
import { COLOR_PALLET } from "../../../stylings/color-pallet/color-pallet";

interface WeatherCardDataProps {
  title: string;
  content: string;
  titleStylings?: { [keyof: string]: string | number };
  contentStylings?: { [keyof: string]: string | number };
  label?: string;
  containerStylings?: { [keyof: string]: string | number };
  children?: JSX.Element[];
}
function WeatherDataCard(props: WeatherCardDataProps) {
  return (
    <Box {...props.containerStylings}>
      <header>
        <Typography color={COLOR_PALLET.lightBlue.hex} {...props.titleStylings}>
          {props.title}
        </Typography>
      </header>
      <Typography
        color={COLOR_PALLET.ghostWhite.hex}
        fontWeight={"400"}
        {...props.contentStylings}
      >
        {props.content}
      </Typography>
      {props.children}
    </Box>
  );
}

export default WeatherDataCard;
