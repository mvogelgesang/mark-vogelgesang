import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

export default function Posts({ data }) {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <Helmet title={`MV - Posts`} />
      <h1>Posts</h1>
      <div className="blog-posts">
        {posts
          .filter((post) => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post" key={post.id}>
                <h2>
                  <Link className="blog-post-link" to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <div className="blog-post-date">{post.frontmatter.date}</div>
                <p className="blog-post-content">{post.excerpt}</p>
              </div>
            );
          })}
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query PostQuery {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          frontmatter {
            date(formatString: "MMMM DD YYYY")
            path
            slug
            tags
            title
          }
        }
      }
    }
  }
`;
