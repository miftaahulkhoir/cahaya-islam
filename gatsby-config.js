module.exports = {
  siteMetadata: {
    title: `Rumah Qur'an Cahaya Muslim`,
    description: `Rumah Qur'an Cahaya Muslim`,
    author: `miftaahulkhoir@gmail.com`,
    siteUrl: `https://gawekne.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/ponpesit.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // {
    //   resolve: 'gatsby-plugin-load-script',
    //   options: {
    //     // disable: !process.env.SENTRY_DSN, // When do you want to disable it ?
    //     src: 'js/script.js',
    //     integrity:
    //       'sha384-Nrg+xiw+qRl3grVrxJtWazjeZmUwoSt0FAVsbthlJ5OMpx0G08bqIq3b/v0hPjhB',
    //     crossorigin: 'anonymous',
    //     // onLoad: `() => Sentry.init({dsn:"${process.env.SENTRY_DSN}"})`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
