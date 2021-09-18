import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

// markup
export default function IndexPage({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout>
      <Helmet title={`MV - Home`} />
      <div className="blog-posts">
        {posts
          .filter((post) => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post" key={post.id}>
                <h1>
                  <Link className="blog-post-link" to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h1>
                <div className="blog-post-date">{post.frontmatter.date}</div>
                <p className="blog-post-content">{post.frontmatter.slug}</p>
              </div>
            );
          })}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 300, format:HTML)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            slug
          }
        }
      }
    }
  }
`;
