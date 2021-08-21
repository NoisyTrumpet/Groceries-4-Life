import { Box, Grid, GridItem, Text, Button } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

const Hero = ({ data }) => {
  const {
    id,
    title,
    heroSubtitle: subtitle,
    prizes,
    ctaLink,
    ctaText,
    image,
  } = data;
  console.log(data);
  return (
    <Box id={id} bg="gradient">
      <Grid templateColumns={["33% 66%"]} pos="relative">
        <GridItem position="relative" overflowY="hidden">
          {image && (
            <Box pos="absolute" left="-20" top="-4">
              <GatsbyImage image={image.gatsbyImageData} alt={title} />
            </Box>
          )}
        </GridItem>
        <GridItem>
          {title && (
            <Text
              color="white"
              fontWeight="900"
              textAlign="center"
              fontSize="4xl"
              py={8}
            >
              {title}
            </Text>
          )}
          <Grid templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}>
            {/* Map thorugh prizes */}
            {prizes.map((prize, i) => (
              <GridItem key={i} textAlign="center" zIndex={9}>
                <Box
                  borderBottomColor="primary"
                  borderBottomWidth="3px"
                  borderBottomStyle="solid"
                  maxW="150"
                  mx="auto"
                  pb={2}
                >
                  <Text
                    color="white"
                    fontWeight="bold"
                    fontSize="2xl"
                    textTransform="uppercase"
                    lineHeight="30px"
                  >
                    {prize.level}
                  </Text>
                </Box>
                <Box>
                  {prize.prizeImage && (
                    <GatsbyImage
                      image={prize.prizeImage.gatsbyImageData}
                      alt={prize.level}
                    />
                  )}
                </Box>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
      <Box
        py={4}
        bg="secondary"
        textAlign="center"
        position="relative"
        zIndex={4}
        _before={{
          background: "inherit",
          content: `""`,
          top: -4,
          display: "block",
          height: "100%",
          left: 0,
          right: 0,
          position: "absolute",
          transform: "skewY(-1.5deg)",
          transformOrigin: "0 100%",
          zIndex: -1,
          borderTopWidth: "9px",
          borderTopStyle: "solid",
          borderTopColor: "primary",
        }}
        _after={{
          background: "inherit",
          content: `""`,
          bottom: 0,
          display: "block",
          height: "100%",
          left: 0,
          right: 0,
          position: "absolute",
          transform: "skewY(2.5deg)",
          transformOrigin: "0%",
          zIndex: -1,
          borderBottomWidth: "9px",
          borderBottomStyle: "solid",
          borderBottomColor: "primary",
        }}
      >
        {/* This can probably just be custom text no need to use this below */}
        {subtitle && (
          <Box
            dangerouslySetInnerHTML={{ __html: subtitle.html }}
            zIndex={4}
            color="white"
            style={{ p: { zIndex: 999 } }}
            fontSize="6xl"
            fontWeight="bold"
          />
        )}
        {ctaLink && ctaText && (
          <Button
            as="a"
            href={ctaLink}
            variant="primary"
            textTransform="uppercase"
            zIndex={4}
            mt={8}
          >
            {ctaText}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Hero;
