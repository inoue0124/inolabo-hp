import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CustomBtn from '../button';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import bgImg from '../../../static/images/bgConv.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(10),
    color: '#fff',
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover"
  },
  convTitle: {
    margin: "0 auto",
    fontSize: "34px",
    "@media (max-width: 840px)": {
      fontSize: "6vw"
    }
  },
  convDescription: {
    margin: "0 auto",
    fontSize: "24px",
    "@media (max-width: 840px)": {
      fontSize: "4vw"
    }
  }
}));

const SectionConv = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid container justify="center" spacing={10}>
        <Grid item xs={12}>
          <Typography align="center" variant="h3" component="h2" className={classes.convTitle}>
            開発のご相談承ります。
          </Typography>
          <Typography align="center" variant="h6" component="h3" className={classes.convDescription}>
            INOLABOは、システムの機能数に応じたわかりやすい料金設定をご用意しております。
          </Typography>
        </Grid>
        <CustomBtn title="お問い合わせ" iconComponent={<MailOutlineIcon />} />
      </Grid>
    </Grid>
  );
}

export default SectionConv