import React from "react"
import Layout from "../components/blog/layout"

import { Link, graphql, useStaticQuery } from "gatsby"
import { FaAngleDoubleRight } from "react-icons/fa"

import Card from "../components/blog/card"
import Sidebar from "../components/blog/sidebar"

function TagPageTemplate({ pageContext }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark {
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
  `)

  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  const edgesWithTag = edges.filter(({ node }) => {
    return node.frontmatter.tags.includes(tag)
  })

  const tagHeader = `"${tag}"に関する${edgesWithTag.length}件の投稿`

  return (
    <Layout pageType="Tag">
      <div>
        <h2 className="page-header">{tagHeader}</h2>
        <div className="flex-layout">
          <div className="cards">
            <h2 id="articles-title">記事一覧</h2>
            {edgesWithTag.map(({ node }, index) => {
              return (
                <Card
                  key={node.id}
                  slug={node.fields.slug}
                  frontmatter={node.frontmatter}
                />
              )
            })}
            <Link to="/topics" id="all-topics-link">
              <span>タグ一覧</span>
              <FaAngleDoubleRight className="icon-right icon-fix" />
            </Link>
          </div>
          <Sidebar posts={data.allMarkdownRemark.edges}/>
        </div>
      </div>
    </Layout>
  )
}

export default TagPageTemplate
