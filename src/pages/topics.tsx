import React from "react"
import { Link, graphql, PageProps } from "gatsby"
import Layout from "../components/blog/layout"

const Topics: React.FC<PageProps<GatsbyTypes.TopicsPageQuery>> = ({ data }) => {
  return (
    <Layout>
      <h2 className="page-header">タグ一覧</h2>
      <div id="all-topics-list">
        {data.allMarkdownRemark.group.map((topic: any) => (
          <Link
            to={`/${topic.fieldValue.toLowerCase().replace(" ", "-")}/`}
            key={topic.fieldValue}
            className="tag"
          >
            <span>
              {topic.fieldValue} ({topic.totalCount})
            </span>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default Topics

export const query = graphql`
  query TopicsPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY年MM月DD日")
            title
            description
            tags
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
