import { Button } from "@chakra-ui/react";
import { Box, Grid, GridItem, Text, Flex } from "@chakra-ui/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import TextContent from "../TextContent";

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
  return (
    <Box id={id} bg="gradient">
      <Grid
        templateColumns={{ base: "100%", lg: "30% 70%" }}
        templateRows={{ base: "auto", lg: "auto" }}
        pos="relative"
        maxW={1500}
        mx={`auto`}
        mb={`-4%`}
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
              display={{ base: `none`, lg: `block` }}
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
              pt={4}
              pb={8}
              px={4}
              width={{ base: `100%`, md: `80%`, xl: `100%` }}
              mx={`auto`}
            >
              {title}
            </Text>
          )}
          <Grid
            templateColumns={{ base: "repeat(2, auto)", lg: "repeat(2, 1fr)" }}
            gap={2}
            justifyContent={`space-evenly`}
            px={[0, 4]}
            // pb={8}
          >
            {/* Map thorugh prizes */}
            {prizes.map((prize, i) => (
              <GridItem
                key={i}
                textAlign="center"
                width={{ base: `100%`, md: `280px`, lg: "fit-content" }}
              >
                <Flex
                  flexDirection={`column`}
                  height={`100%`}
                  justifyContent={`space-between`}
                >
                  <Box
                    // px={{ base: 4, lg: 0 }}
                    mt={{ base: 2, lg: 4 }}
                    mb={{
                      base: 4,
                      lg:
                        (prize.level === `Groceries` && `10`) ||
                        (prize.level === `Gas` && `12`),
                    }}
                    mx={`auto`}
                    px={{
                      base:
                        (prize.level === `Groceries` && 0) ||
                        (prize.level === `Gas` && 0),
                      lg:
                        (prize.level === `Groceries` && `2`) ||
                        (prize.level === `Gas` && `6`),
                    }}
                    sx={{
                      img: {
                        width: { base: `auto`, lg: `100%` },
                        height: {
                          base:
                            (prize.level === `Groceries` && `140px`) ||
                            (prize.level === `Gas` && `140px`),
                          md:
                            (prize.level === `Groceries` && `200px`) ||
                            (prize.level === `Gas` && `200px`),
                          lg: `auto`,
                        },
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
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
      <Box
        pb={0}
        pt={{ base: 3, md: 0 }}
        bg="secondary"
        textAlign="center"
        position="relative"
        zIndex={8}
        _before={{
          background: "inherit",
          content: `""`,
          top: { base: -4, md: -4 },
          display: "block",
          height: { base: "100%", lg: "100%" },
          left: 0,
          right: 0,
          position: "absolute",
          transform: { base: "skewY(-4.5deg)", md: "skewY(-2.5deg)" },
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
          height: { base: "100%", lg: "106%" },
          left: 0,
          right: 0,
          position: "absolute",
          transform: { base: "skewY(5.5deg)", md: "skewY(3.5deg)" },
          transformOrigin: "0%",
          zIndex: -1,
          borderBottomWidth: "9px",
          borderBottomStyle: "solid",
          borderBottomColor: "primary",
        }}
      >
        <Box
          height={{ base: "100%", xl: "120px", "2xl": "150px" }}
          max-height={{ base: "275px", xl: "revert" }}
          pt={3}
          pb={4}
        >
          <Box
            zIndex={4}
            style={{ color: `white`, p: { zIndex: 999 } }}
            fontSize={{ base: "3xl", lg: "3xl" }}
            fontWeight="bold"
            px={3}
            textAlign="center"
            sx={{
              ".disDot": {
                display: { base: `none`, md: `block` },
                mx: 4,
              },
              p: {
                lineHeight: 1.2,
                // height: "50px",
              },
            }}
          >
            <TextContent content={subtitle.raw} />
          </Box>
          {ctaLink && ctaText && (
            <Button
              as="a"
              href={ctaLink}
              variant="primary"
              textTransform="uppercase"
              zIndex={4}
              fontSize={{ base: "xl", lg: "3xl" }}
              px={10}
              position="relative"
              bottom={{ base: "-4", md: "0", "2xl": "-6" }}
            >
              {ctaText}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
