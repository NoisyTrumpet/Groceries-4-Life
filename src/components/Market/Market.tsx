import { Box, Grid, GridItem, Heading } from "@chakra-ui/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { forwardRef } from "react";
import SVG, { Props as SVGProps } from "react-inlinesvg";

interface MarketProps {
  name: string;
  beneficiaries: any;
}

const Logo = forwardRef<SVGElement, SVGProps>((props, ref) => (
  <SVG innerRef={ref} title={props?.title ?? ``} {...props} />
));

const Market = ({ name, beneficiaries }: MarketProps) => {
  return (
    <section>
      <Box my={[4, 8, 12]}>
        <Heading
          as="h2"
          color="black"
          textAlign={`center`}
          fontSize={["2xl", "3xl", "4xl"]}
        >
          {name}
        </Heading>
        <Grid
          mt={8}
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap={4}
        >
          {beneficiaries &&
            beneficiaries.map(({ name, id, companyLink, logo }) => {
              const { mimeType, url, width, height, gatsbyImageData } = logo;

              const isSVG = mimeType === "image/svg+xml";
              const isLink = companyLink !== null;
              console.log(companyLink);

              const itemStyles = {
                display: "grid",
                placeItems: "center",
                img: {
                  maxHeight: "200px",
                },
                svg: {
                  maxHeight: "200px",
                },
              };

              if (isSVG && !isLink) {
                return (
                  <GridItem key={id} sx={itemStyles}>
                    <Logo src={url} title={name} />
                  </GridItem>
                );
              }

              if (isLink && isSVG) {
                return (
                  <GridItem
                    key={id}
                    as="a"
                    href={companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={itemStyles}
                  >
                    <Logo src={url} title={name} />
                  </GridItem>
                );
              }

              if (isLink && !isSVG) {
                return (
                  <GridItem
                    key={id}
                    as="a"
                    href={companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={itemStyles}
                  >
                    <GatsbyImage
                      image={gatsbyImageData}
                      alt={name}
                      title={name}
                      width={width}
                      height={height}
                    />
                  </GridItem>
                );
              }

              return (
                <GridItem key={id} sx={itemStyles}>
                  <GatsbyImage
                    image={gatsbyImageData}
                    alt={name}
                    width={width}
                    height={height}
                  />
                </GridItem>
              );
            })}
        </Grid>
      </Box>
    </section>
  );
};

export default Market;
