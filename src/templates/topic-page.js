import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Card from "../components/blog/card"
import Layout from "../components/blog/layout"
import Sidebar from "../components/blog/sidebar"

const TopicPageTemplate = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query TopicPage {
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
      allTopicsJson {
        edges {
          node {
            name
            slug
            image {
              childImageSharp {
                fluid(maxWidth: 50, maxHeight: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const { topic } = pageContext
  const { edges } = data.allMarkdownRemark

  const edgesWithTopic = edges.filter(({ node }) => {
    return node.frontmatter.category.includes(topic)
  })

  const topicInfo = data.allTopicsJson.edges.filter(({ node }) => {
    return node.slug === topic.toLowerCase().replace(" ", "-")
  })[0].node

  return (
    <Layout pageType="Topic">
      <div className="topic-page-header">
        <h1>{topicInfo.name}</h1>
      </div>
      <div className="flex-layout">
        <div className="cards">
          <h2 id="articles-title">記事一覧</h2>
          {edgesWithTopic.map(({ node }, index) => {
            return (
              <Card
                key={node.fields.slug}
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                title={node.frontmatter.title}
                category={node.frontmatter.category}
                tags={node.frontmatter.tags}
                slug={node.fields.slug}
              />
            )
          })}
        </div>
        <Sidebar posts={data.allMarkdownRemark.edges} />
      </div>
    </Layout>
  )
}

export default TopicPageTemplate
