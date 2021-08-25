import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

type Props = {
  markdown: any
}

const Featured: React.FC<Props> = ({ markdown }) => {
  if (!markdown) {
    return <div>...loading</div>
  } else {
    return (
      <div id="featured">
        {markdown.edges.map(({ node }: any, index: any) => {
          if (index === 0) {
            return (
              <figure
                key={node.fields.slug}
                className="featured-link featured-main"
              >
                <Link to={node.fields.slug}>
                  <div className="featured-overlay"></div>
                  <Image
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  <figcaption>
                    <h2>{node.frontmatter.title}</h2>
                    <span>{node.frontmatter.category}</span>
                  </figcaption>
                </Link>
              </figure>
            )
          } else if (index < 3) {
            return (
              <figure
                key={node.fields.slug}
                className="featured-link featured-secondary"
              >
                <Link to={node.fields.slug}>
                  <div className="featured-overlay"></div>
                  <Image
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  <figcaption>
                    <h2>{node.frontmatter.title}</h2>
                    <span>{node.frontmatter.category}</span>
                  </figcaption>
                </Link>
              </figure>
            )
          } else return null
        })}
      </div>
    )
  }
}

export default Featured
