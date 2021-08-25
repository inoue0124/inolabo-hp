import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import CustomBtn from "../button"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
const bgImg = require("../../../static/images/bgConv.png")

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
    color: "#fff",
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    textAlign: "center",
  },
  convTitle: {
    margin: "0 auto",
    fontSize: "34px",
    "@media (max-width: 840px)": {
      fontSize: "6vw",
    },
  },
  convDescription: {
    margin: "0 auto",
    fontSize: "24px",
    "@media (max-width: 840px)": {
      fontSize: "4vw",
    },
  },
}))

const SectionConv = () => {
  const classes = useStyles()

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h2" className={classes.convTitle}>
          開発のご相談承ります。
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          className={classes.convDescription}
        >
          INOLABOは、システムの機能数に応じたわかりやすい料金設定をご用意しております。
        </Typography>
        <CustomBtn
          title="お問い合わせ"
          iconComponent={<MailOutlineIcon />}
          bgColor="#F2994A"
          to="/inquiry"
        />
      </Grid>
    </Grid>
  )
}

export default SectionConv
