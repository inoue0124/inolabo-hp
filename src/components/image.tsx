import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

type Props = {
  filename: string
  height: number
  width: number
  alt: string
}

const Image: React.FC<Props> = ({ filename, height, width, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 2500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find((da: any) => {
    return da.node.relativePath.includes(filename)
  })
  if (!image) {
    return null
  }
  //const imageSizes = image.node.childImageSharp.sizes; ←サイズFIXしたい時
  return (
    /*<Img alt={props.alt} sizes={imageSizes} /> ←サイズFIXしたい時 */
    <Img
      style={{ height: height, width: width, margin: "auto" }}
      fluid={image.node.childImageSharp.fluid}
      alt={alt}
    />
  )
}

export default Image
