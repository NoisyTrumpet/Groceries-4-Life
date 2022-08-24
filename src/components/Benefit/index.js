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
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          pl={{ base: 0, md: 8 }}
        >
          {items &&
            items.map((item) => (
              <Box
                key={item.id}
                py={4}
                flex={{ base: "200px", lg: "1" }}
                maxHeight={200}
                maxWidth={{ base: 150, md: 250 }}
                px={{
                  base:
                    (item.name === "SAMA" && 0) ||
                    (item.name === "The Public Theater of San Antonio" &&
                      "9") ||
                    (item.name === "San Antonio Chamber Choir" && "6") ||
                    (item.name === "Ballet San Antonio" && 0) ||
                    (item.name === "Youth Orchestras of San Antonio" && "10"),
                  md:
                    (item.name === "SAMA" && 0) ||
                    (item.name === "The Public Theater of San Antonio" &&
                      "16") ||
                    (item.name === "San Antonio Chamber Choir" && "6") ||
                    (item.name === "Ballet San Antonio" && 0) ||
                    (item.name === "Youth Orchestras of San Antonio" && "10"),
                }}
              >
                <GatsbyImage
                  image={item.logo.gatsbyImageData}
                  alt={item.name}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            ))}
        </Flex>
      </Container>
    </Box>
  );
}

export default Benefits;
