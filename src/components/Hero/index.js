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
      <Grid
        templateColumns={{ base: "100%", lg: "30% 70%" }}
        templateRows={{ base: "auto auto", lg: "auto" }}
        pos="relative"
        maxW={1500}
        mx={`auto`}
      >
        <GridItem
          position="relative"
          overflowY="visible"
          zIndex={6}
          rowStart={{ base: 2, lg: 1 }}
        >
          {image && (
            <Box
              pos={{ base: "relative", lg: "absolute" }}
              left={{ base: "-8", lg: "-16" }}
              bottom={{ base: "-8", md: "-8" }}
              overflow="visible"
              width={{ base: 400, md: 540, lg: 480, xl: 580 }}
              mt={{ base: -8, lg: 0 }}
            >
              <GatsbyImage
                image={image.gatsbyImageData}
                alt={title}
                style={{
                  width: "100%",
                  height: "auto",
                  paddingTop: { base: "3rem", md: "0" },
                }}
              />
            </Box>
          )}
        </GridItem>
        <GridItem py={4} zIndex={10} rowStart={{ base: 1, lg: 1 }}>
          {title && (
            <Text
              color="white"
              fontWeight="900"
              textAlign="center"
              fontSize={{ base: "3xl", md: "5xl" }}
              lineHeight={1.1}
              py={8}
              px={4}
              width={{ base: `100%`, md: `80%`, xl: `100%` }}
              mx={`auto`}
            >
              {title}
            </Text>
          )}
          <Grid
            templateColumns={{ base: "repeat(2, auto)", lg: "repeat(4, 1fr)" }}
            templateRows={{ base: "repeat(2, auto)", lg: "repeat(1, auto)" }}
            justifyContent={`space-evenly`}
            px={4}
          >
            {/* Map thorugh prizes */}
            {prizes.map((prize, i) => (
              <GridItem
                key={i}
                textAlign="center"
                width={{ base: `200px`, md: `280px`, lg: "fit-content" }}
              >
                <Box
                  borderBottomColor="primary"
                  borderBottomWidth="3px"
                  borderBottomStyle="solid"
                  maxW={{ base: "60%", xl: "50%" }}
                  mx="auto"
                  pb={2}
                >
                  <Text
                    color="white"
                    fontWeight="bold"
                    fontSize="xl"
                    textTransform="uppercase"
                    lineHeight="25px"
                  >
                    {prize.level}
                  </Text>
                </Box>
                <Box
                  px={{ base: 4, lg: 0 }}
                  my={{ base: 4, lg: 8 }}
                  // width={{ base: `60%`, lg: `100%` }}
                  mx={`auto`}
                  // maxHeight={150}
                  sx={{
                    img: {
                      width: { base: `auto`, md: `100%` },
                      height: { base: `100px`, md: `auto` },
                    },
                  }}
                >
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
        zIndex={8}
        _before={{
          background: "inherit",
          content: `""`,
          top: { base: -14, md: -20 },
          display: "block",
          height: "100%",
          left: 0,
          right: 0,
          position: "absolute",
          transform: { base: "skewY(-4.5deg)", md: "skewY(-1.5deg)" },
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
          transform: { base: "skewY(5.5deg)", md: "skewY(2.5deg)" },
          transformOrigin: "0%",
          zIndex: -1,
          borderBottomWidth: "9px",
          borderBottomStyle: "solid",
          borderBottomColor: "primary",
        }}
      >
        {/* This can probably just be custom text no need to use this below */}
        {/* 1 for $25 • 3 for $50 • 10 for $100 */}
        <Box
          // dangerouslySetInnerHTML={{ __html: subtitle.html }}
          zIndex={4}
          color="primary"
          // style={{ p: { zIndex: 999 } }}
          fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }}
          fontWeight="bold"
          display={`flex`}
          flexDirection={{ base: `column`, md: `row` }}
          justifyContent={`center`}
          alignItems={`center`}
          px={4}
          sx={{
            ".disDot": {
              display: { base: `none`, md: `block` },
              mx: 4,
            },
          }}
        >
          <Text>
            1{" "}
            <Box as="span" color={`#fff`} fontSize="5xl">
              for
            </Box>{" "}
            $25
          </Text>
          <Text className="disDot">•</Text>
          <Text>
            3{" "}
            <Box as="span" color={`#fff`} fontSize="5xl">
              for
            </Box>{" "}
            $50
          </Text>
          <Text className="disDot">•</Text>
          <Text>
            10{" "}
            <Box as="span" color={`#fff`} fontSize="5xl">
              for
            </Box>{" "}
            $100
          </Text>
        </Box>
        {/* {subtitle && (
          <Box
            dangerouslySetInnerHTML={{ __html: subtitle.html }}
            zIndex={4}
            color="white"
            style={{ p: { zIndex: 999 } }}
            fontSize="6xl"
            fontWeight="bold"
          />
        )} */}
        {ctaLink && ctaText && (
          <Button
            as="a"
            href={ctaLink}
            variant="primary"
            textTransform="uppercase"
            zIndex={4}
            // mt={8}
            px={8}
            position="relative"
            bottom={{ base: "-10", md: "-14", xl: "-20" }}
          >
            {ctaText}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Hero;
