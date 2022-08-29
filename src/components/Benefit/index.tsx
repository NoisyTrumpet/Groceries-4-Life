import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Flex,
} from "@chakra-ui/react";
import SVG, { Props as SVGProps } from "react-inlinesvg";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { forwardRef } from "react";


const Logo = forwardRef<SVGElement, SVGProps>((props, ref) => (
  <SVG innerRef={ref} title={props?.title ?? ""} {...props} />
));

function Benefits({ title, items }) {
  return (
    <Box
      textAlign="center"
      pt={{ base: "20", lg: "6em", "2xl": "8em" }}
      pb="10"
    >
      <Container>
        {title && (
          <Heading as="h2" color="black" maxW={800} mx="auto">
            {title}
          </Heading>
        )}
        <Grid
          mt={8}
          templateColumns="50% 50%"
          gap={4}
        >
          {items &&
            items.map(({ name, id, companyLink, logo }, index) => {
              const { mimeType, url, width, height, gatsbyImageData } = logo;

              const isSVG = mimeType === "image/svg+xml";
              const isLink = companyLink !== "" || companyLink !== null;
              const isTexasYes = name === "TEXAS YES";

              const itemStyles = {
                display: "grid",
                placeItems: "center",
                minHeight: "170px",
                img: {
                  maxHeight: "200px",
                  maxWidth: "400px",
                },
                svg: {
                  maxHeight: "200px",
                  maxWidth: "400px",
                },
              };

              if (!isTexasYes && isSVG && !isLink) {
                return (
                  <GridItem key={id} sx={itemStyles}>
                    <Logo src={url} title={name} />
                  </GridItem>
                );
              }

              if (!isTexasYes &&isLink && isSVG) {
                return (
                  <GridItem
                    key={id}
                    as="a"
                    href={companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={itemStyles}
                  >
                    <Logo src={url} title={name} />
                  </GridItem>
                );
              }

              if (!isTexasYes &&isLink && !isSVG) {
                return (
                  <GridItem
                    key={id}
                    as="a"
                    href={companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={itemStyles}
                  >
                    <GatsbyImage
                      image={gatsbyImageData}
                      alt={name}
                      title={name}
                    />
                  </GridItem>
                );
              }

              return !isTexasYes &&(
                <GridItem key={id} sx={itemStyles}>
                  <GatsbyImage
                    image={gatsbyImageData}
                    alt={name}
                  />
                </GridItem>
              );
            })}
        </Grid>
        <Box
        display={`grid`}
        mt={8}
        placeItems="center"
          sx={{
            svg: {
              maxHeight: "200px",
              maxWidth: "600px",
            }
          }}
        >
          {items &&
            items.map(({ name, id, companyLink, logo }, index) => {
              const { url } = logo;
              const isTexasYes = name === "TEXAS YES";

              const itemStyles = {
                display: "grid",
                placeItems: "center",
                minHeight: "170px",
                img: {
                  maxHeight: "200px",
                  maxWidth: "400px",
                },
                svg: {
                  maxHeight: "200px",
                  maxWidth: "400px",
                },
              };

              return isTexasYes &&(
                <Logo src={url} title={name} />
              );
            })}
        </Box>
      </Container>
    </Box>
  );
}

export default Benefits;
