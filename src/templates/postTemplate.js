import React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import kebabCase from "lodash/kebabCase"
import Layout from "../components/layout";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <article>
        <Helmet title={`MV - ${post.frontmatter.title}`} />
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <div className="blog-post-date">{post.frontmatter.date} </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          {post.frontmatter.tags ? (
            <div className="tags-container">
              <div>
                {post.frontmatter.tags.map((tag) => (
                  <div className="tag-item" key={tag + `tag`}>
                    <Link className="tag" to={`/tags/${kebabCase(tag)}/`}>
                      {tag}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        slug
      }
    }
  }
`;
