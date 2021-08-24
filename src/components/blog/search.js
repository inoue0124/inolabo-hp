import React from "react"
import Card from "./card"
import Sidebar from "./sidebar"

const Search = ({ markdown, query }) => {
  const blogPosts = markdown.edges

  const filteredPosts = blogPosts.filter(({ node }) => {
    const { frontmatter } = node

    const titleMatch = frontmatter.title
      .toLowerCase()
      .includes(query.toLowerCase())
    const topicMatch = frontmatter.category
      .toLowerCase()
      .includes(query.toLowerCase())
    const tagsMatch = frontmatter.tags
      .map(tag => tag.toLowerCase())
      .some(tag => tag.includes(query.toLowerCase()))
    const descriptionMatch = frontmatter.description
      .toLowerCase()
      .includes(query.toLowerCase())

    return titleMatch || topicMatch || tagsMatch || descriptionMatch
  })

  return (
    <div>
      <div>
        <h2 className="page-header">
          "<strong>{query.replace("%20", " ")}</strong>"
          {filteredPosts.length > 0
            ? "の検索結果"
            : "に一致する記事はありませんでした。"}
        </h2>
        <div className="flex-layout">
          <div className="cards">
            <h2 id="articles-title">記事一覧</h2>
            {filteredPosts.map(({ node }, index) => {
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
          </div>
          <Sidebar posts={blogPosts} />
        </div>
      </div>
    </div>
  )
}
export default Search
