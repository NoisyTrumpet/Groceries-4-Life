import React, { forwardRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
// import PropTypes from "prop-types";
import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import SVG from 'react-inlinesvg';

const Logo = forwardRef((props, ref) => (
  <SVG innerRef={ref} title={props?.title ?? ``} {...props} />
));

const Header = () => {
  const { graphCmsHeader: header } = useStaticQuery(headerQuery);
  const {
    // id,
    buttonText,
    buttonLink,
    introTitle: title,
    introSubTitle: subtitle,
    multiLineSub,
    logo,
    dateRange,
  } = header;


  return (
    <Box bg="lightBG">
      <Grid templateColumns={["100%", "33% 33% 33%"]} pt={8} pb={4}>
        <GridItem display={{ base: `none`, md: `block` }}></GridItem>
        <GridItem align={`center`} pb={{ base: 8, md: 0 }}>
          <Box as="a" href="/">
            <Logo src={logo.url} title={`test`} />
          </Box>
          <Text mt={4} fontSize={24} fontWeight={800} color={`darkBG`}>
            {dateRange}
          </Text>
        </GridItem>
        <GridItem d="grid" placeItems="center">
          {buttonText && buttonLink && (
            <Button
              as="a"
              href={buttonLink}
              variant="primary"
              textTransform="uppercase"
              px={10}
              fontSize={{ base: "xl", lg: "3xl" }}
            >
              {buttonText}
            </Button>
          )}
        </GridItem>
      </Grid>
      <Box
        textAlign="center"
        py={6}
        bgColor="darkBG"
        color="textColor"
        px={4}
        textTransform="capitalize"
        fontWeight={800}
      >
        {title && (
          <Heading as="h1" fontSize={{ base: `xl`, md: `3xl` }}>
            {title}
          </Heading>
        )}
        {subtitle && (
          <Text fontSize={{ base: `xl`, md: `3xl` }}>{subtitle}</Text>
        )}
      </Box>
    </Box>
  );
};

export default Header;

const headerQuery = graphql`
  query headerQuery {
    graphCmsHeader {
      id
      introTitle
      introSubTitle
      dateRange
      buttonLink
      buttonText
      logo {
        url
      }
    }
  }
`;
