import React from "react"
import CardSmall from "./cardSmall"

const Sidebar = ({ posts }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-header">人気記事一覧</h2>
      <div className="sidebar-popular">
        {posts.map(({ node }, index) => {
          if (index > 2 && index < 5) {
            return (
              <CardSmall
                key={node.fields.slug}
                slug={node.fields.slug}
                frontmatter={node.frontmatter}
              />
            )
          } else return null
        })}
      </div>
    </div>
  )
}

export default Sidebar