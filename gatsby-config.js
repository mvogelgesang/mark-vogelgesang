module.exports = {
  siteMetadata: {
    title: "Mark Vogelgesang",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/markovogelgesang/",
      github: "https://github.com/mvogelgesang",
    },
    navigation: [
      {
        label: "MV",
        path: "/",
      },
      {
        label: "Posts",
        path: "/posts",
      },
      {
        label: "About",
        path: "/about",
      }
    ],
    siteUrl: "https://markvogelgesang.com"
  },
  plugins: [
    "gatsby-plugin-image",
    `gatsby-transformer-sharp`, // Needed for dynamic images
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    "react-burger-menu",
    "react-router-dom",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "267819652",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:ital,200,400,400i,500,700,800,400`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },    
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
            },
          },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              // Optional:
    
              // the github handler whose gists are to be accessed
              username: "mvogelgesang",
    
              // a flag indicating whether the github default gist css should be preloaded or not
              // use this if you want to load the default css asynchronously.
              // default: false
              gistCssPreload: true
    
              // a string that represents the github default gist css url.
              // defaults: "https://github.githubassets.com/assets/gist-embed-b3b573358bfc66d89e1e95dbf8319c09.css"
              //gistCssUrlAddress: "<string>"
            }
          }
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
