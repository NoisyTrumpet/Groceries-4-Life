import { Box, Grid, GridItem, Heading, Container } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

const TextBlock = ({ title, content, image }) => {
  return (
    <Box bg="primary" color="white" py="8">
      {title && (
        <Heading as="h2" textAlign="center">
          {title}
        </Heading>
      )}
      <Container>
        <Grid templateColumns={["50% 50%"]}>
          <GridItem
            borderRightWidth="3px"
            borderRightColor="white"
            borderRightStyle="solid"
          >
            {content && (
              <Box dangerouslySetInnerHTML={{ __html: content.html }} />
            )}
          </GridItem>
          <GridItem p={4}>
            {image && <GatsbyImage image={image.gatsbyImageData} alt={title} />}
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default TextBlock;
