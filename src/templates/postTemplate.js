import React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import kebabCase from "lodash/kebabCase";
import Layout from "../components/layout";

export default function Template({ data }) {
  const post = data.mdx;
  return (
    <Layout pageTitle={post.frontmatter.title}>
      <article>
        <Helmet>
          <style>
            @import
            url("https://github.githubassets.com/assets/gist-embed-b3b573358bfc66d89e1e95dbf8319c09.css");
          </style>
          <script type="application/ld+json">
            {`{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://mvogelgesang.com/article"
            },
            "headline": "${post.frontmatter.title}",
            "keywords": "${post.frontmatter.tags.join(",")}",
            "wordCount": ${post.wordCount.words},
            "url": "https://mvogelgesang${post.frontmatter.path}",
            "author": {
              "@type": "Person",
              "name": "Mark Vogelgesang",
              "url": "https://mvogelgesang.com/about"
            }}`}
          </script>
        </Helmet>
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <div className="blog-post-date">{post.frontmatter.date}</div>
          <div className="blog-post-content">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
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
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD YYYY")
        path
        slug
        tags
        title
      }
      wordCount {
        words
      }
    }
  }
`;
