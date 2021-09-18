import React from "react";
import { Helmet } from "react-helmet"
import { StaticQuery, graphql} from "gatsby";

import Navigation from "./navigation"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query NavigationQuery {
          site {
            siteMetadata {
              socialMedia {
                github
                linkedin
              }
              navigation {
                label
                path
              }
            }
          }
        }
      `}
      render={(data) => (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="src/images/favicon/site.webmanifest"/>
      </Helmet>
      <Navigation props={data}/>
      
      <main className="main">{children}</main>
      <Footer props={data} />
    </div>
   )}
   />
 );
}
