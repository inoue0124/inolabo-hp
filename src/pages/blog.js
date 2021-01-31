import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FaAngleDoubleRight } from "react-icons/fa"

import Layout from "../components/blog/layout"
import SEO from "../components/seo"
import Card from "../components/blog/card"
import Featured from "../components/blog/featured"
import Search from "../components/blog/search"
import Sidebar from "../components/blog/sidebar"

const BlogPage = props => {
  const data = useStaticQuery(graphql`
    {
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
  `)
  const [queryType, query] = props.location.search.split("=")

  if (queryType === "?s" && query.length > 0) {
    return (
      <Layout>
        <Search
          markdown={data.allMarkdownRemark}
          tagsGroup={data.tagsGroup}
          query={query}
        />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title="Home" slug="/" />
        <Featured markdown={data.allMarkdownRemark} />
        <div className="flex-layout">
          <div className="cards">
            <h2 id="articles-title">記事一覧</h2>
            {data.allMarkdownRemark.edges.map(({ node }, index) => {
              if (index < 3) {
                return null
              } else {
                return (
                  <Card
                    key={node.id}
                    slug={node.fields.slug}
                    frontmatter={node.frontmatter}
                  />
                )
              }
            })}
          </div>
          <Sidebar posts={data.allMarkdownRemark.edges}/>
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
