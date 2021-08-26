import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 250,
  },
  text: {
    textAlign: "left",
  },
})

type Props = {
  title: string
  platform: string
  technology: string
  image: any
}

const WorksCard: React.FC<Props> = ({ title, platform, technology, image }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        className={classes.media}
        image={image}
        title="Contemplative Reptile"
      />
      <CardContent className={classes.text}>
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h4">
          {platform}
        </Typography>
        <br />
        <Typography variant="h6" color="textSecondary" component="h3">
          使用技術
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h3">
          {technology}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default WorksCard
