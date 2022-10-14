import React, { forwardRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
// import PropTypes from "prop-types";
import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
// import SVG from "react-inlinesvg";

// const Logo = forwardRef((props, ref) => (
//   <SVG innerRef={ref} title={props?.title ?? ``} {...props} />
// ));

import Logo from "SVG/index";

function Header() {
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
      <Grid templateColumns={["100%"]} pt={[2, 4]} pb={[2, 4]}>
        <GridItem display={{ base: "none", md: "block" }} />
        <GridItem align="center" pb={{ base: 4, md: 0 }}>
          <Box
            as="a"
            href="/"
            display="grid"
            width={400}
            maxWidth="100%"
            padding={[4, 0]}
            sx={{
              svg: {
                maxWidth: "100%",
                height: "auto",
              },
            }}
          >
            <Logo title="Gas & Groceries for Life | Presented by Thomas J. Henry" />
          </Box>
          <Text mt={4} fontSize={[20, 24]} fontWeight={800} color="darkBG">
            {dateRange}
          </Text>
        </GridItem>
        {/* <GridItem d="grid" placeItems="center" width="100%">
          {buttonText && buttonLink && (
            <Button
              as="a"
              href={buttonLink}
              variant="primary"
              textTransform="uppercase"
              px={10}
              fontSize={{ base: "xl", lg: "3xl" }}
              mx="auto"
              mt={[0, 4]}
              mb={2}
              display="flex"
              maxWidth="fit-content"
            >
              {buttonText}
            </Button>
          )}
        </GridItem> */}
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
          <Heading as="h1" fontSize={{ base: "xl", md: "3xl" }} mb={4}>
            {title}
          </Heading>
        )}
        <Heading textTransform="uppercase" as="h2">
          Grand Prize Winners
        </Heading>
        {/* {subtitle && (
          <Text fontSize={{ base: "xl", md: "3xl" }}>{subtitle}</Text>
        )} */}
      </Box>
    </Box>
  );
}

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
