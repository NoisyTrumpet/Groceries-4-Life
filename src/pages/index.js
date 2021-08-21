import * as React from "react";
import { graphql } from "gatsby";
// Wrappers
import Layout from "Components/Layout";
// Components
import Hero from "Components/Hero";
import Benefits from "Components/Benefit";
import TextBlock from "Components/TextBlock";

const IndexPage = ({ data: page }) => {
  const { hero, beneficiaries, beneficiariesTitle, textBlock } =
    page.graphCmsPage;

  return (
    <Layout>
      {/* Hero */}
      <Hero data={hero} />
      {/* Benefits */}
      <Benefits title={beneficiariesTitle} items={beneficiaries} />
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
    graphCmsPage(slug: { eq: "home" }) {
      hero {
        ... on GraphCMS_Hero {
          id
          heroSubtitle {
            html
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
