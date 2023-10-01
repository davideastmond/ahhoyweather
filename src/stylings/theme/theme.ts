import { createTheme } from "@mui/material/styles";
import { COLOR_PALLET } from "../color-pallet/color-pallet";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        backgroundColor: COLOR_PALLET.midnight.hex,
        color: COLOR_PALLET.ghostWhite.hex,
        fontPalette: "light",
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: COLOR_PALLET.ghostWhite.hex,
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: COLOR_PALLET.ghostWhite.hex,
    },
    secondary: {
      main: COLOR_PALLET.ghostWhite.hex,
    },
    background: {
      default: COLOR_PALLET.darkMidnightBlue.hex,
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
