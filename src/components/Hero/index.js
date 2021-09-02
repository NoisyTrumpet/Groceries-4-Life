import { Box, Grid, GridItem, Text, Button, Flex } from "@chakra-ui/react";
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
            templateColumns={{ base: "repeat(2, auto)", lg: "repeat(4, 1fr)" }}
            templateRows={{
              base: "repeat(2, minmax(150px, 180px))",
              md: "repeat(2, minmax(150px, 230px))",
              lg: "repeat(1, auto)",
            }}
            gridGap={`20px 0`}
            justifyContent={`space-evenly`}
            px={4}
            // pb={8}
          >
            {/* Map thorugh prizes */}
            {prizes.map((prize, i) => (
              <GridItem
                key={i}
                textAlign="center"
                width={{ base: `200px`, md: `280px`, lg: "fit-content" }}
              >
                <Flex
                  flexDirection={`column`}
                  height={`100%`}
                  justifyContent={`space-between`}
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
                    // px={{ base: 4, lg: 0 }}
                    mt={{ base: 2, lg: 4 }}
                    mb={{
                      base: 4,
                      lg:
                        (prize.level === `Grand Prize` && `10`) ||
                        (prize.level === `Second Place` && `12`) ||
                        (prize.level === `Third Place` && `14`) ||
                        (prize.level === `Fourth Place` && `16`),
                    }}
                    mx={`auto`}
                    px={{
                      base:
                        (prize.level === `Grand Prize` && 0) ||
                        (prize.level === `Second Place` && 0) ||
                        (prize.level === `Third Place` && 0) ||
                        (prize.level === `Fourth Place` && 0),
                      lg:
                        (prize.level === `Grand Prize` && `2`) ||
                        (prize.level === `Second Place` && `6`) ||
                        (prize.level === `Third Place` && `8`) ||
                        (prize.level === `Fourth Place` && `12`),
                    }}
                    sx={{
                      img: {
                        width: { base: `auto`, lg: `100%` },
                        height: {
                          base:
                            (prize.level === `Grand Prize` && `120px`) ||
                            (prize.level === `Second Place` && `100px`) ||
                            (prize.level === `Third Place` && `90px`) ||
                            (prize.level === `Fourth Place` && `80px`),
                          md:
                            (prize.level === `Grand Prize` && `180px`) ||
                            (prize.level === `Second Place` && `160px`) ||
                            (prize.level === `Third Place` && `150px`) ||
                            (prize.level === `Fourth Place` && `140px`),
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
        pt={6}
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
          height: { base: "100%", lg: "100%" },
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
        <Box height={{ base: "170px", md: "110px", xl: "80px" }}>
          <Box
            // dangerouslySetInnerHTML={{ __html: subtitle.html }}
            zIndex={4}
            color="primary"
            // style={{ p: { zIndex: 999 } }}
            fontSize={{ base: "3xl", lg: "3xl" }}
            fontWeight="bold"
            display={`flex`}
            flexDirection={{ base: `column`, md: `row` }}
            justifyContent={`center`}
            alignItems={`center`}
            px={3}
            sx={{
              ".disDot": {
                display: { base: `none`, md: `block` },
                mx: 4,
              },
              p: {
                lineHeight: 1,
                height: "50px",
              },
            }}
          >
            <Text>
              1{" "}
              <Box
                as="span"
                color={`#fff`}
                fontSize={{ base: "2xl", lg: "3xl" }}
              >
                Raffle Ticket for
              </Box>{" "}
              $25
            </Text>
            <Text className="disDot">•</Text>
            <Text>
              3{" "}
              <Box
                as="span"
                color={`#fff`}
                fontSize={{ base: "2xl", lg: "3xl" }}
              >
                Raffle Tickets for
              </Box>{" "}
              $50
            </Text>
            <Text className="disDot">•</Text>
            <Text>
              10{" "}
              <Box
                as="span"
                color={`#fff`}
                fontSize={{ base: "2xl", lg: "3xl" }}
              >
                Raffle Tickets for
              </Box>{" "}
              $100
            </Text>
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
              bottom={{ base: "-2", md: "-12", xl: "-8" }}
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
