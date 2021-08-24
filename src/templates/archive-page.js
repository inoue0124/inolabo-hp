import React from "react"
import { graphql, Link } from "gatsby"

import Card from "../components/blog/card"
import Sidebar from "../components/blog/sidebar"
import Layout from "../components/blog/layout"
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"

function ArchivePageTemplate({ data, pageContext }) {
  const { numPages, currentPage } = pageContext
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout pageType="Archive">
      <h2 className="page-header">過去記事</h2>
      <div className="flex-layout">
        <div className="cards">
          <h2 id="articles-title">記事一覧</h2>
          {posts.map(({ node }, index) => {
            return (
              <Card
                key={node.id}
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                title={node.frontmatter.title}
                category={node.frontmatter.category}
                tags={node.frontmatter.tags}
                slug={node.fields.slug}
              />
            )
          })}
          <div className="pagination-links">
            {currentPage === 1 && (
              <Link disabled className="pagination-disabled">
                <FaAngleDoubleLeft className="icon-left" />
                <span>前へ</span>
              </Link>
            )}
            {currentPage === 2 && (
              <Link to="/archive" className="pagination-link">
                <FaAngleDoubleLeft className="icon-left icon-fix" />
                <span>前へ</span>
              </Link>
            )}
            {currentPage > 2 && (
              <Link
                to={`/archive/${currentPage - 1}`}
                className="pagination-link"
              >
                <FaAngleDoubleLeft className="icon-left icon-fix" />
                <span>前へ</span>
              </Link>
            )}
            {currentPage > 0 &&
              [...Array(numPages)].map((_, index) => {
                if (index + 1 === currentPage) {
                  return (
                    <Link disabled className="pagination-disabled">
                      {index + 1}
                    </Link>
                  )
                } else {
                  return (
                    <Link
                      className="pagination-link"
                      to={`/archive/${index === 0 ? "" : index + 1}`}
                    >
                      {index + 1}
                    </Link>
                  )
                }
              })}
            {currentPage < numPages ? (
              <Link
                to={`/archive/${currentPage + 1}`}
                className="pagination-link"
              >
                <span>次へ</span>
                <FaAngleDoubleRight className="icon-right icon-fix" />
              </Link>
            ) : (
              <Link disabled className="pagination-disabled">
                <span>次へ</span>
                <FaAngleDoubleRight className="icon-right icon-fix" />
              </Link>
            )}
          </div>
        </div>
        <Sidebar posts={data.allMarkdownRemark.edges} />
      </div>
    </Layout>
  )
}

export default ArchivePageTemplate
export const pageQuery = graphql`
  query archiveQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
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
