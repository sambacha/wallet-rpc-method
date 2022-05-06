
const emoji = require("remark-emoji");

module.exports = {
  pathPrefix: "/pristine-typescript-gatsby-react-material-ui",
  siteMetadata: {
    title: 'MySnap',
    description: '',
    logoUrl: 'https://camo.githubusercontent.com/bc04ec4cd12a232ee902ce0c0344098ad854e80d/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313439322f312a337256307a30756654716b474334524a3376585177412e706e67',
    primaryColor: '#3f51b5', //material-ui primary color
    secondaryColor: '#f50057', //material-ui secondary colo
    author: '',
    menuLinks: [
      {
        name: 'home',
        link: '/',
        ignoreNextPrev: true
      },
      {
        name: 'API Documentation',
        link: '/api-documentation'
      }
    ],
    footerLinks: [
      {
        name: 'OpenRPC Specification',
        link: 'https://github.com/open-rpc/spec'
      }
    ]
  },
  plugins: [
    '@xops.net/gatsby-openrpc-theme',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'pristine-site',
        short_name: 'pristine-site',
        start_url: '/',
        background_color: 'transparent',
        theme_color: '#3f51b5',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    }
  ],
}
