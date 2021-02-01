import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from "../image"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
    marginTop: '50px'
  },
  title: {
    borderBottom: "solid 1px",
    paddingLeft: "100px",
    paddingRight: "20px"
  },
  profTitle: {
    marginTop: "30px",
    marginBottom: "30px",
    fontSize: "28px"
  }
}));

const SectionAbout = () => {
  const classes = useStyles();

  return (
    <div id="about" style={{ paddingTop: "50px", paddingBottom: "100px", background: "#EFEFEF" }}>
      <Typography align="left" variant="h4" component="h2">
        <span className={classes.title}>ABOUT</span>
      </Typography>
      <Grid container className={classes.root}>
        <Grid container justify="center" spacing={50}>
          <Grid item xs={12} md={3} align="center" style={{marginTop: "30px"}}>
            <Image filename="profImage.png" alt="heroイメージ" height="200px" width="200px"/>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="h4" component="h3" className={classes.profTitle}>
              INOLABOプロフィール
            </Typography>
            <Typography variant="body1" component="h3">
東京大学大学院工学系研究科専攻卒業。<br/>

大学院では音声認識技術を用いて、語学学習者の発音を自動評価する研究を行う。<br/>

また中国への1年間の留学経験から、語学を学ぶ楽しさをより多くの人に伝えるべく個人サービスの開発にも専念。<br/>

現在は都内メガベンチャーにてソフトウェアエンジニアとして活動中。<br/>

音声・語学・エンジニアリングの融合を夢見る。
            </Typography>
          </Grid>  
        </Grid>
      </Grid>
    </div>
  );
}

export default SectionAbout