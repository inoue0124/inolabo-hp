import React from "react"
import CardSmall from "./cardSmall"

type Props = {
  posts: any
}

const Sidebar: React.FC<Props> = ({ posts }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-header">人気記事一覧</h2>
      <div className="sidebar-popular">
        {posts.map(({ node }: any, index: number) => {
          if (index > 2 && index < 5) {
            return (
              <CardSmall
                key={node.fields.slug}
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                title={node.frontmatter.title}
                category={node.frontmatter.category}
                slug={node.fields.slug}
              />
            )
          } else return null
        })}
      </div>
    </div>
  )
}
export default Sidebar
