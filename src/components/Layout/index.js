import React from "react";
// import Fonts from "../../@chakra-ui/gatsby-plugin/theme/foundations/fonts";
import theme from "../../@chakra-ui/gatsby-plugin/theme";
// Fonts
import montserrat300 from "@fontsource/montserrat/files/montserrat-latin-300-normal.woff2";
import montserrat500 from "@fontsource/montserrat/files/montserrat-latin-500-normal.woff2";
import montserrat700 from "@fontsource/montserrat/files/montserrat-latin-700-normal.woff2";
import montserrat900 from "@fontsource/montserrat/files/montserrat-latin-900-normal.woff2";
import "@fontsource/montserrat/latin-300.css";
import "@fontsource/montserrat/latin-500.css";
import "@fontsource/montserrat/latin-700.css";
import "@fontsource/montserrat/latin-900.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "Components/Header";
import Footer from "Components/Footer";
// import { useLocation } from "@reach/router";
import { SkipNavContent, SkipNavLink } from "Components/SkipNav/index";
import "Styles/main.scss";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  // const { pathname } = useLocation();
  return (
    <ChakraProvider theme={theme}>
      {/* <Fonts /> */}
      <Helmet>
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          key="montserrat-300"
          href={montserrat300}
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href={montserrat500}
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href={montserrat700}
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href={montserrat900}
          crossOrigin="anonymous"
        />
      </Helmet>
      <SkipNavLink />
      <Header />
      <SkipNavContent>{children}</SkipNavContent>
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
