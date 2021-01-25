import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from "../image"
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    padding: "50px",
    width: "90%", 
    margin: "0 auto",
    "@media (max-width: 840px)": {
      padding: "0 20px"
    }
  },
  txtBox: {
    padding: "50px",
    color: "#505050",
    "@media (max-width: 840px)": {
      padding: "50px 20px"
    }
  },
  txtTitle: {
    margin: "0 auto",
    marginBottom: "20px",
    paddingRight: "10px",
    fontSize: "28px",
    borderBottom: "solid 10px #FFA800",
    lineHeight: 1,
    display: "inline-block",
    "@media (max-width: 840px)": {
      fontSize: "6vw"
    }
  },
  txtDescription: {
    margin: "0 auto",
    fontSize: "20px",
    "@media (max-width: 840px)": {
      fontSize: "4vw"
    }
  }
});

const SolutionCard = ({title, description, imgFileName, isImageLeft}) => {
  const classes = useStyles();

  if (isImageLeft) {
    return (
      <Grid container className={classes.root}>
        <Grid container justify="center">
          <Grid md={5} sm={12}>
            <Image height="100%" filename={imgFileName} alt="heroイメージ" />
          </Grid>
          <Grid md={7} sm={12} justify="center">
            <p className={classes.txtBox}>
              <Typography align="left" component="h2" className={classes.txtTitle}>
                <span>{title}</span>
              </Typography>
              <Typography align="left" component="h2" className={classes.txtDescription}>
                <span>{description}</span>
              </Typography>
            </p>
          </Grid>
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid container className={classes.root}>
        <Grid container justify="center">
          <Grid md={7} sm={12} justify="center">
            <p className={classes.txtBox}>
              <Typography align="left" component="h2" className={classes.txtTitle}>
                <span>{title}</span>
              </Typography>
              <Typography align="left" component="h2" className={classes.txtDescription}>
                <span>{description}</span>
              </Typography>
            </p>
          </Grid>
          <Grid md={5} sm={12}>
            <Image height="100%" filename={imgFileName} alt="heroイメージ" />
          </Grid>
        </Grid>
      </Grid>
    )
  }
  
}

export default SolutionCard