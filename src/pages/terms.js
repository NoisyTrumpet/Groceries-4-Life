import * as React from "react";
import { graphql } from "gatsby";
// Wrappers
import Layout from "Components/Layout";
// Components
import TermsBlock from "Components/TermsBlock";

const IndexPage = ({ data: page }) => {
  const { textBlocks } = page.graphCmsTerm;

  return (
    <Layout>
      {/* Terms & Conditions Block */}
      <TermsBlock content={textBlocks} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    graphCmsTerm {
      textBlocks {
        title
        text {
          html
        }
      }
    }
  }
`;
