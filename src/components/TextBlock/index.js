import { Box, Grid, GridItem, Heading, Container } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

const TextBlock = ({ title, content, image }) => {
  return (
    <Box bg="primary" color="white" py="8">
      {title && (
        <Heading as="h2" textAlign="center" mb={8}>
          {title}
        </Heading>
      )}
      <Container>
        <Grid
          templateColumns={{ base: "100%", md: "50% 50%" }}
          templateRows={{ base: "auto auto", md: "auto" }}
        >
          <GridItem
            borderRight={{ base: `none`, md: "3px solid white" }}
            borderBottom={{ base: "3px solid white", md: `none` }}
            p={8}
          >
            {content && (
              <Box dangerouslySetInnerHTML={{ __html: content.html }} />
            )}
          </GridItem>
          <GridItem py={8} px={20}>
            {image && <GatsbyImage image={image.gatsbyImageData} alt={title} />}
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default TextBlock;
