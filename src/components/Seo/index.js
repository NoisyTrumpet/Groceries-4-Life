import React from "react";
// import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

const Seo = ({ title, description, image, article }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(seoQuery);
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };
  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{ lang: "en" }}
    >
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
};
export default Seo;
// Seo.propTypes = {
//   siteTitle: PropTypes.string,
//   siteDescription: PropTypes.string,
//   image: PropTypes.string,
//   article: PropTypes.bool,
// };
// Seo.defaultProps = {
//   siteTitle: null,
//   siteDescription: null,
//   image: null,
//   article: false,
// };
const seoQuery = graphql`
  query seoQuery {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`;
