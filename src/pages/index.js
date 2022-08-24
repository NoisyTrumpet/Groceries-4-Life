import * as React from "react";
import { graphql } from "gatsby";
// Wrappers
import Layout from "Components/Layout";
// Components
import Hero from "Components/Hero";
import Benefits from "Components/Benefit";
import TextBlock from "Components/TextBlock";
import Seo from "Components/Seo";
import Market from "../components/Market";
import { Container, Grid, Heading } from "@chakra-ui/layout";

const IndexPage = ({ data: page }) => {
  const {
    hero,
    beneficiaries,
    beneficiariesTitle,
    textBlock,
    seoMeta,
    markets,
  } = page.graphCmsPage;
  const { seoTitle, seoDescription } = seoMeta;

  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} />
      {/* Hero */}
      <Hero data={hero} />
      {/* Benefits */}
      {/* <Benefits title={beneficiariesTitle} items={beneficiaries} /> */}
      {/* Markets */}
      <Container pt={{ base: "20", lg: "6em", "2xl": "8em" }} pb="10">
        <Heading
          as="h2"
          color="black"
          maxW={800}
          mx={`auto`}
          textAlign="center"
        >
          {beneficiariesTitle}
        </Heading>
        <Grid templateColumns={["100%", "50% 50%"]} gap={4}>
          {markets &&
            markets.map(({ title, beneficiaries, id }, index) => (
              <Market key={id} name={title} beneficiaries={beneficiaries} />
            ))}
        </Grid>
      </Container>
      {/* TextBlock */}
      <TextBlock
        title={textBlock.title}
        content={textBlock.text}
        image={textBlock.image}
      />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    graphCmsPage {
      slug
      title
      seoMeta {
        seoDescription
        seoTitle
      }
      hero {
        ... on GraphCMS_Hero {
          id
          heroSubtitle {
            html
            raw
            markdown
            remoteTypeName
            text
          }
          title
          prizes {
            level
            prizeImage {
              gatsbyImageData(
                placeholder: BLURRED
                quality: 60
                layout: CONSTRAINED
              )
            }
          }
          image {
            gatsbyImageData(
              placeholder: BLURRED
              quality: 60
              layout: CONSTRAINED
            )
          }
          ctaLink
          ctaText
        }
      }
      beneficiariesTitle
      markets {
        title
        id
        beneficiaries {
          name
          id
          companyLink
          logo {
            gatsbyImageData
            url
            mimeType
            height
            width
          }
        }
      }
      beneficiaries {
        logo {
          id
          gatsbyImageData(
            placeholder: BLURRED
            quality: 60
            layout: CONSTRAINED
          )
        }
        id
        companyLink
        name
      }
      textBlock {
        title
        text {
          html
        }
        image {
          url
          mimeType
          gatsbyImageData(
            placeholder: BLURRED
            quality: 60
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`;
