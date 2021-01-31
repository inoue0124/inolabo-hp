import React from "react"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Image from "gatsby-image"
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  chip: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontSize: "10px",
    borderRadius: 0
  }
}));

const Card = ({ frontmatter, slug }) => {
  const classes = useStyles();

  return (
    <figure className="card-styles">
      <Link to={slug}>
        <Image
          className="card-image"
          fluid={frontmatter.featuredImage.childImageSharp.fluid}
        />
      </Link>

      <figcaption>
        <Link to={`/${frontmatter.category.toLowerCase().replace(" ", "-")}`}>
          <div className="card-topic">{frontmatter.category}</div>
        </Link>
        <Link to={slug}>
          <h3>{frontmatter.title}</h3>
        </Link>
          {frontmatter.tags.map((tag, index) => {
            return (
              <Link to={`/${tag.toLowerCase().replace(" ", "-")}`}>
                <Chip className={classes.chip} key={index} label={tag} size="small" onClick={()=>{}}/>
              </Link>
            )
          })}
      </figcaption>
    </figure>
  )
}
export default Card
