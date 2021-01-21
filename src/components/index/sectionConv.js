import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CustomBtn from '../button';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(10),
    background: '#696969',
    color: '#fff'
  }
}));

const SectionConv = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid container justify="center" spacing={10}>
        <Grid item xs={12}>
          <Typography align="center" variant="h4" component="h2">
            CONTACT
          </Typography>
        </Grid>
        <CustomBtn title="お問い合わせはこちら" iconComponent={<MailOutlineIcon />} />
      </Grid>
    </Grid>
  );
}

export default SectionConv