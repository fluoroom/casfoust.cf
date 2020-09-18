module.exports = {
  siteMetadata: {
    title: 'casfoust',
    description: 'dj & producer',
    author: 'casfoust'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-styled-jsx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // The property ID; the tracking code won't be generated without it
          trackingId: "UA-39145239-3",
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: true,
          // Setting this parameter is optional
          anonymize: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Delays sending pageview hits on route update (in milliseconds)
          pageTransitionDelay: 0,
          // Enables Google Optimize using your container Id
          optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
          // Enables Google Optimize Experiment ID
          experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
          // Set Variation ID. 0 for original 1,2,3....
          variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
          // Defers execution of google analytics script after page load
          defer: false,
          // Any additional optional fields
          sampleRate: 5,
          siteSpeedSampleRate: 10,
          cookieDomain: "",
        },
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
