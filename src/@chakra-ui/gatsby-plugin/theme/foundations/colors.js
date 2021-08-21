import { theme } from "@chakra-ui/react";

const defaultColors = theme.colors;

const colors = {
  color: "#707070",
  bg: "#FFFFFF",
  primaryColorScheme: "gray",
  primary: "#CB8C44",
  secondary: "#900B17",
  darkBG: "#1A1818",
  lightBG: "#e8eaea",
  textColor: "#D39D49",
  green: "#2b666b",
  // gradient:
  gradient: `radial-gradient(circle, rgba(43,102,107,1) 0%,rgba(43,102,107,1) 60%, rgba(26,32,44,1) 100%)`,
  darkGray: "#5B6770",
  gradientTop: "#FFFFFF",
  gradientBottom: "#FFFFFF",
  headingColor: "black",
  cardBg: "#FFFFFF",
  cardLink: defaultColors.black,
  cardLinkHover: defaultColors.blue["600"],
  black: "#201D1D",
  dark: {
    color: defaultColors.whiteAlpha["800"],
    bg: defaultColors.gray["900"],
    primary: defaultColors.blue["300"],
    gradientTop: defaultColors.gray["900"],
    gradientBottom: defaultColors.gray["700"],
    headingColor: "white",
    cardBg: defaultColors.gray["700"],
    cardLink: defaultColors.white,
    cardLinkHover: defaultColors.blue["400"],
  },
};

export default colors;
