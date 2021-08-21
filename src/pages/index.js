import * as React from "react";
import { graphql } from "gatsby";
// Wrappers
import Layout from "Components/Layout";
// Components
import Hero from "Components/Hero";

const IndexPage = ({ data: page }) => {
  const { hero, beneficiaries, beneficiariesTitle, textBlock } =
    page.graphCmsPage;

  console.log(page.graphCmsPage);

  return (
    <Layout>
      {/* Hero */}
      <Hero data={hero} />
      {/* Benefits */}
      <pre>{JSON.stringify(beneficiaries, null, 4)}</pre>
      {/* TextBlock */}
      <pre>{JSON.stringify(textBlock, null, 4)}</pre>
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
