import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

const Benefits = ({ title, items }) => {
  return (
    <Box textAlign="center" pt="20">
      <Container>
        {title && (
          <Heading as="h2" color="black">
            {title}
          </Heading>
        )}
        <Grid templateColumns={["repeat(5, 1fr)"]}>
          {items &&
            items.map((item) => (
              <GridItem key={item.id}>
                <GatsbyImage
                  image={item.logo.gatsbyImageData}
                  alt={item.name}
                />
              </GridItem>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
