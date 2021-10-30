import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import "./utils/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "./navigation";
import Footer from "./footer";
const shortcodes = { FontAwesomeIcon };

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query NavigationQuery {
          site {
            siteMetadata {
              socialMedia {
                name
                url
                icon
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
          <Helmet
            htmlAttributes={{
              lang: "en",
            }}
          >
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta charSet="utf-8" />
            <link rel="manifest" href="src/images/favicon/site.webmanifest" />
          </Helmet>
          <Navigation props={data} />
          <MDXProvider components={shortcodes}>
            <main className="main">{children}</main>
          </MDXProvider>
          <Footer props={data} />
        </div>
      )}
    />
  );
}
