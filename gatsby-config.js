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
    ],
    siteUrl: "https://mvogelgesang.com"
  },
  plugins: [
    "gatsby-plugin-image",
    `gatsby-transformer-sharp`, // Needed for dynamic images
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    "react-burger-menu",
    "react-router-dom",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-RHS4QJ314P"],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
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
        theme_color: `#375037`,
        icon: `src/images/favicon/android-chrome-512x512.png`,
        icons: [
          {
            src: `src/images/favicon/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: 'https://mvogelgesang.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
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
