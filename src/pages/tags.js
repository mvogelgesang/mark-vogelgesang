/*https://dennytek.com/blog/personal-site-with-gatsby-part-7*/
import React from "react";
import { Link, graphql } from "gatsby";
import kebabCase from "lodash/kebabCase"
import Layout from "../components/layout";

const TagsPage = ({ data }) => {
  const allTags = data.allMarkdownRemark.group;
  console.log(allTags);
  console.log(allTags[0])
  return (
    <Layout>
      <div>
        <h1>Tags</h1>
        <div className="tag-list">
          <ul>
            {allTags.map((tag) => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue.toLowerCase()} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000, sort: {fields: frontmatter___tags, order: ASC}) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
