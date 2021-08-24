import * as React from "react";
import { graphql } from "gatsby";
// Wrappers
import Layout from "Components/Layout";
// Components
import TermsBlock from "Components/TermsBlock";
import Seo from "Components/Seo";

const IndexPage = ({ data: page }) => {
  const { textBlocks, seoMeta } = page.graphCmsTerm;
  const { seoTitle, seoDescription } = seoMeta;

  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} />
      {/* Terms & Conditions Block */}
      <TermsBlock content={textBlocks} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    graphCmsTerm {
      slug
      title
      seoMeta {
        seoDescription
        seoTitle
      }
      textBlocks {
        title
        text {
          html
        }
      }
    }
  }
`;
