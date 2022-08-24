import { Box, Grid, GridItem, Heading, Container } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { forwardRef } from "react";
import SVG from "react-inlinesvg";

const Image = forwardRef((props, ref) => (
  <SVG innerRef={ref} title={props?.title ?? ``} {...props} />
));

const TextBlock = ({ title, content, image }) => {
  const imageType = image.mimeType;

  const isSVG = imageType === "image/svg+xml";

  console.log(image);
  return (
    <Box bg="primary" color="white" py="6">
      {title && (
        <Heading as="h2" textAlign="center" mb={2}>
          {title}
        </Heading>
      )}
      <Container>
        <Grid
          templateColumns={{ base: "100%", md: "50% 50%" }}
          templateRows={{ base: "auto auto", md: "250px" }}
        >
          <GridItem
            borderRight={{ base: `none`, md: "3px solid white" }}
            borderBottom={{ base: "3px solid white", md: `none` }}
            px={8}
            py={4}
          >
            {content && (
              <Box
                dangerouslySetInnerHTML={{ __html: content.html }}
                sx={{ h6: { marginTop: 4 } }}
              />
            )}
          </GridItem>
          <GridItem
            py={4}
            px={{ base: "10", md: "20" }}
            sx={{ img: { height: "auto", width: { base: "100%", lg: "80%" } } }}
          >
            {!isSVG && image && (
              <GatsbyImage image={image.gatsbyImageData} alt={title} />
            )}
            {isSVG && image && <Image src={image.url} alt={title} />}
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default TextBlock;
