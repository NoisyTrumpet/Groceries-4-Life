import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

const Benefits = ({ title, items }) => {
  return (
    <Box textAlign="center" py="20" mt={20}>
      <Container>
        {title && (
          <Heading as="h2" color="black" maxW={800} mx={`auto`}>
            {title}
          </Heading>
        )}
        <Flex
          flexDirection={`row`}
          flexWrap="wrap"
          alignItems={`center`}
          justifyContent={`center`}
        >
          {items &&
            items.map((item) => (
              <Box
                key={item.id}
                py={4}
                maxWidth={`fit-content`}
                flex={{ base: `200px`, lg: `1` }}
                maxHeight={200}
                maxWidth={250}
                px={
                  (item.name === `SAMA` && 0) ||
                  (item.name === `The Public Theater of San Antonio` && `16`) ||
                  (item.name === `San Antonio Chamber Choir` && `6`) ||
                  (item.name === `Ballet San Antonio` && 0) ||
                  (item.name === `Youth Orchestras of San Antonio` && `10`)
                }
                sx={{
                  img: {
                    width: `100%`,
                    height: `auto`,
                    // px:
                    //   (item.name === `SAMA` && 0) ||
                    //   (item.name === `The Public Theater of San Antonio` && `4`) ||
                    //   (item.name === `San Antonio Chamber Choir` && `4`) ||
                    //   (item.name === `Ballet San Antonio` && 0) ||
                    //   (item.name === `Youth Orchestras of San Antonio` && `4`),
                  },
                }}
              >
                <GatsbyImage
                  image={item.logo.gatsbyImageData}
                  alt={item.name}
                  style={{ width: `fit-content` }}
                />
              </Box>
            ))}
        </Flex>
        {/* <Grid
          templateColumns={{base: "repeat(3, auto)", md: "repeat(5, auto)"}}
          templateRows={{base: "repeat(2, auto)", md: "repeat(1, auto)"}}
          alignItems={`center`}
        >
          {items &&
            items.map((item) => (
              <GridItem
                key={item.id}
                py={4}
                sx={{
                  img: {
                    mx: `auto`,
                    minWidth: `10px`,
                    width: 
                      (item.name === `SAMA` && `100%`) ||
                      (item.name === `The Public Theater of San Antonio` && `50%`) ||
                      (item.name === `San Antonio Chamber Choir` && `70%`) ||
                      (item.name === `Ballet San Antonio` && `100%`) ||
                      (item.name === `Youth Orchestras of San Antonio` && `60%`),
                  },
                }}
              >
                <GatsbyImage
                  image={item.logo.gatsbyImageData}
                  alt={item.name}
                  style={{width: `fit-content`}}
                />
              </GridItem>
            ))}
        </Grid> */}
      </Container>
    </Box>
  );
};

export default Benefits;
