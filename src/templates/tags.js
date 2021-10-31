import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";

// Components
import { Link, graphql } from "gatsby";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `Tag - "${tag}"`;
  const tagSubtitle = `${totalCount} post${totalCount === 1 ? "" : "s"}`;

  return (
    <Layout pageTitle={tagHeader}>
      <div>
        <h1>{tagHeader}</h1>
        <p className="tag-subtitle">{tagSubtitle}</p>
        <div className="tag-list">
          <ul>
            {edges.map(({ node }) => {
              const { title } = node.frontmatter;
              const { path } = node.frontmatter;
              const { id } = node.frontmatter;
              return (
                <li key={id}>
                  <Link to={path}>{title}</Link>
                </li>
              );
            })}
          </ul>
          <Link to="/tags">All tags</Link>
        </div>
      </div>
    </Layout>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
          id
        }
      }
    }
  }
`;
