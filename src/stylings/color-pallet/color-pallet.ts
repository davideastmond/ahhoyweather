enum Colors {
  black = "black",
  charcoal = "charcoal",
  paynesGray = "paynesGray",
  lightBlue = "lightBlue",
  ghostWhite = "ghostWhite",
  midnight = "midnight",
  darkMidnightBlue = "darkMidnightBlue",
  putridGelb = "putridGelb",
}

type ColorPallet = {
  [key in Colors]: { hex: string };
};

export const COLOR_PALLET: ColorPallet = {
  black: {
    hex: "#000000",
  },
  charcoal: {
    hex: "#2F4550",
  },
  paynesGray: {
    hex: "#586F7C",
  },
  lightBlue: {
    hex: "#B8DBD9",
  },
  ghostWhite: {
    hex: "#F4F4F9",
  },
  midnight: {
    hex: "#101418",
  },
  darkMidnightBlue: {
    hex: "#0f1924",
  },
  putridGelb: {
    hex: "#F0bf4c",
  },
};
