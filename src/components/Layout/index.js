import React from "react";
// import Fonts from "../../@chakra-ui/gatsby-plugin/theme/foundations/fonts";
import theme from "../../@chakra-ui/gatsby-plugin/theme";
// Fonts
import "@fontsource/montserrat";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "Components/Header";
import Footer from "Components/Footer";
// import { useLocation } from "@reach/router";
import { SkipNavContent, SkipNavLink } from "Components/SkipNav/index";
import "Styles/main.scss";

const Layout = ({ children }) => {
  // const { pathname } = useLocation();
  return (
    <ChakraProvider theme={theme}>
      {/* <Fonts /> */}
      <SkipNavLink />
      <Header />
      <SkipNavContent>{children}</SkipNavContent>
      {/* <Footer /> */}
    </ChakraProvider>
  );
};

export default Layout;
