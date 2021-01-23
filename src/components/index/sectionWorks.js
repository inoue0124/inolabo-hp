import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WorksCard from "../worksCard"
import Typography from '@material-ui/core/Typography';
import expImg from '../../../static/images/worksExperiment.png'
import chitaiImg from '../../../static/images/worksChintai.png'
import talkativeImg from '../../../static/images/solutionLanguage.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(10)
  },
  title: {
    borderBottom: "solid 1px",
    paddingLeft: "100px",
    paddingRight: "20px"
  }
}));

const SectionWorks = () => {
  const classes = useStyles();

  return (
    <div id="works" style={{ paddingTop: "60px" }}>
      <Typography align="left" variant="h4" component="h2">
        <span className={classes.title}>WORKS</span>
      </Typography>
      <Grid container className={classes.root}>
        <Grid container justify="center" spacing={10}>
          <Grid item xs={12} md={4} align="center">
            <WorksCard title="実験作成・管理システム" platform="Web" technology="Nuxt.js, Ruby on Rails, AWS" image={expImg}/>
          </Grid>
          <Grid item xs={12} md={4} align="center">
            <WorksCard title="賃貸写真記録アプリ" platform="iOS, Android" technology="Swift, Kotlin" image={chitaiImg}/>
          </Grid>
          <Grid item xs={12} md={4} align="center">
            <WorksCard title="語学マッチングSNS" platform="iOS" technology="Swift, Firebase" image={talkativeImg}/>
          </Grid>  
        </Grid>
      </Grid>
    </div>
  );
}

export default SectionWorks