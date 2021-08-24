import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
// import PropTypes from "prop-types";
import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";

const Header = () => {
  const { graphCmsHeader: header } = useStaticQuery(headerQuery);
  const {
    // id,
    buttonText,
    buttonLink,
    introTitle: title,
    introSubTitle: subtitle,
    logo,
  } = header;
  //   console.log(id);
  //   console.log(buttonText);
  //   console.log(buttonLink);
  //   console.log(title);
  //   console.log(subtitle);
  //   console.log(logo);

  const image = logo.gatsbyImageData;

  return (
    <Box bg="lightBG">
      <Grid templateColumns={["100%", "33% 33% 33%"]} py={8}>
        <GridItem display={{ base: `none`, md: `block` }}></GridItem>
        <GridItem align={`center`} pb={{ base: 8, md: 0 }}>
          <Box as="a" href="/">
            {image && title && (
              <GatsbyImage
                image={image}
                alt={title}
                style={{ width: `70%`, height: `auto` }}
              />
            )}
          </Box>
        </GridItem>
        <GridItem d="grid" placeItems="center">
          {buttonText && buttonLink && (
            <Button
              as="a"
              href={buttonLink}
              variant="primary"
              textTransform="uppercase"
              px={8}
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
        px={2}
        textTransform="capitalize"
        fontWeight={800}
      >
        {title && (
          <Heading as="h1" fontSize={{ base: `xl`, md: `3xl` }}>
            {title}
          </Heading>
        )}
        {subtitle && (
          <Text fontSize={{ base: `3xl`, md: `5xl` }}>{subtitle}</Text>
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
      buttonLink
      buttonText
      logo {
        gatsbyImageData(placeholder: BLURRED, quality: 60, layout: CONSTRAINED)
      }
    }
  }
`;
