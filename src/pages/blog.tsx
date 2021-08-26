import React from "react"
import { Link, graphql, PageProps } from "gatsby"
import { FaAngleDoubleRight } from "react-icons/fa"

import Layout from "../components/blog/layout"
import SEO from "../components/seo"
import Card from "../components/blog/card"
import Featured from "../components/blog/featured"
import Search from "../components/blog/search"
import Sidebar from "../components/blog/sidebar"

const BlogPage: React.FC<PageProps<GatsbyTypes.BlogPageQuery>> = ({
  data,
  location,
}) => {
  const [queryType, query] = location.search.split("=")

  if (queryType === "?s" && query.length > 0) {
    return (
      <Layout>
        <Search markdown={data.allMarkdownRemark} query={query} />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title="Home" />
        <Featured markdown={data.allMarkdownRemark} />
        <div className="flex-layout">
          <div className="cards">
            <h2 id="articles-title">記事一覧</h2>
            {data.allMarkdownRemark.edges.map(
              ({ node }: any, index: number) => {
                if (index < 3) {
                  return null
                } else {
                  return (
                    <Card
                      key={node.id}
                      fluid={
                        node.frontmatter.featuredImage.childImageSharp.fluid
                      }
                      title={node.frontmatter.title}
                      category={node.frontmatter.category}
                      tags={node.frontmatter.tags}
                      slug={node.fields.slug}
                    />
                  )
                }
              }
            )}
          </div>
          <Sidebar posts={data.allMarkdownRemark.edges} />
        </div>
        <Link to="/archive/2" id="archive-link">
          もっと見る
          <FaAngleDoubleRight className="icon-right" />
        </Link>{" "}
        <br />
      </Layout>
    )
  }
}

export default BlogPage

export const query = graphql`
  query BlogPage {
    tagsGroup: allMarkdownRemark(limit: 100) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY年MM月DD日")
            title
            description
            category
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600) {
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
