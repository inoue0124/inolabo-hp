import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Image, { FluidObject } from "gatsby-image"
import Chip from "@material-ui/core/Chip"

const useStyles = makeStyles(theme => ({
  chip: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontSize: "10px",
    borderRadius: 0,
  },
}))

type Props = {
  fluid: FluidObject | FluidObject[]
  title: string
  category: string
  tags: string[]
  slug: string
}

const Card: React.FC<Props> = ({ fluid, title, category, tags, slug }) => {
  const classes = useStyles()

  return (
    <figure className="card-styles">
      <Link to={slug}>
        <Image className="card-image" fluid={fluid} />
      </Link>

      <figcaption>
        <Link to={`/${category.toLowerCase().replace(" ", "-")}`}>
          <div className="card-topic">{category}</div>
        </Link>
        <Link to={slug}>
          <h3>{title}</h3>
        </Link>
        {tags.map((tag, index) => {
          return (
            <Link to={`/${tag.toLowerCase().replace(" ", "-")}`}>
              <Chip
                className={classes.chip}
                key={index}
                label={tag}
                size="small"
                onClick={() => {}}
              />
            </Link>
          )
        })}
      </figcaption>
    </figure>
  )
}

export default Card
