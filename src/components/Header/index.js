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
      <Grid templateColumns={["100%", "33% 33% 33%"]}>
        <GridItem></GridItem>
        <GridItem>
          {image && title && <GatsbyImage image={image} alt={title} />}
        </GridItem>
        <GridItem d="grid" placeItems="center">
          {buttonText && buttonLink && (
            <Button
              as="a"
              href={buttonLink}
              variant="primary"
              textTransform="uppercase"
            >
              {buttonText}
            </Button>
          )}
        </GridItem>
      </Grid>
      <Box textAlign="center" py={6} bgColor="darkBG" color="textColor">
        {title && <Heading as="h1">{title}</Heading>}
        {subtitle && <Text>{subtitle}</Text>}
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
