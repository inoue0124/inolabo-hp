import React from "react"
import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

type Props = {
  fluid: FluidObject | FluidObject[]
  title: string
  category: string
  slug: string
}

const CardSmall: React.FC<Props> = ({ fluid, title, category, slug }) => {
  return (
    <figure className="card-small-styles">
      <Link to={slug}>
        <Image className="card-small-image" fluid={fluid} />
      </Link>

      <figcaption>
        <Link to={slug}>
          <h3>{title}</h3>
        </Link>
        <Link to={`/${category.toLowerCase().replace(" ", "-")}`}>
          <span className="card-small-topic">{category}</span>
        </Link>
      </figcaption>
    </figure>
  )
}
export default CardSmall
