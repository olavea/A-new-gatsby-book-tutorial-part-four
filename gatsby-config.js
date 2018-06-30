module.exports = {
    siteMetadata: {
        title: `Book`,
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
        name: `src`,
        path: `${__dirname}/src/`,
        },
      },

      `gatsby-plugin-glamor`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
    ],
  };
