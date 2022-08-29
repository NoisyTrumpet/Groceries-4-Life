require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://google.com",
    title: "Home",
    titleTemplate: "%s | Groceries 4 Life",
    description: "description here",
    url: "https://google.com", // No trailing slash allowed!
    image: "src/images/Raffle.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    // Netlify:
    `gatsby-plugin-netlify`,
    // GraphCMS Endpoint:
    {
      resolve: "gatsby-source-graphcms",
      options: {
        // Download Images
        downloadLocalImages: true,
        // Your GraphCMS API endpoint. Available from your project settings.
        endpoint: process.env.GATSBY_GRAPHCMS_ENDPOINT,
        // A PAT (Permanent Auth Token) for your project. Required if your project is not available publicly, or you want to scope access to a specific content stage (i.e. draft content).
        // token: process.env.GATSBY_GRAPHCMS_TOKEN
      },
    },
    // Chakra:
    "@chakra-ui/gatsby-plugin",
    // Alias Imports:
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          Components: `src/components`,
          Constants: `src/constants`,
          Features: `src/features`,
          Graphql: `src/graphql`,
          Hooks: `src/hooks`,
          Pages: "src/pages",
          Styles: `src/styles`,
          SVG: `src/svg`,
          Utils: `src/utils`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/Raffle.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
