import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WorksCard from "../worksCard"
import Typography from '@material-ui/core/Typography';
import expImg from '../../../static/images/buildings.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(10)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const SectionWorks = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid container justify="center" spacing={10}>
        <Grid item xs={12}>
          <Typography align="center" variant="h4" component="h2">
            WORKS
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} align="center">
          <WorksCard title="語学学習SNS" image={expImg}/>
        </Grid>
        <Grid item xs={12} md={4} align="center">
          <WorksCard title="賃貸写真記録アプリ" image={expImg}/>
        </Grid>
        <Grid item xs={12} md={4} align="center">
          <WorksCard title="実験作成・管理システム" image={expImg}/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SectionWorks