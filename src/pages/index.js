import React, { useState, useEffect, useRef } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Image from "../components/image"
import Header from "../components/header"
import Footer from "../components/footer"
import SectionSolution from "../components/index/sectionSolution"
import SectionWorks from "../components/index/sectionWorks"
import SectionAbout from "../components/index/sectionAbout"
import SectionConv from "../components/index/sectionConv"
import SEO from "../components/seo"
import "../styles/styles.css"
import Typography from '@material-ui/core/Typography'
import CustomBtn from '../components/button'
import MailOutlineIcon from '@material-ui/icons/MailOutline'


const useStyles = makeStyles((theme) => ({
  heroTxtBox: {
    position: "absolute",
    top: "40%",
    width: "100%",
    color: "#505050",
  },
  heroTxtH1: {
    margin: "0 auto",
    width: "1200px",
    fontSize: "48px",
    "@media (max-width: 1300px)": {
      width: "758px",
      paddingLeft: "20px"
    },
    "@media (max-width: 840px)": {
      width: "758px",
      fontSize: "6vw",
      paddingLeft: "20px"
    }
  },
  heroTxtH2: {
    margin: "0 auto",
    width: "1200px",
    fontSize: "24px",
    "@media (max-width: 1300px)": {
      width: "758px",
      paddingLeft: "20px"
    },
    "@media (max-width: 840px)": {
      width: "758px",
      fontSize: "4vw",
      paddingLeft: "20px"
    }
  }
}));

const IndexPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isTransparent, setIsTransparent] = useState(true)
  const target = useRef(null);
  useEffect(()=>{
    const cb = (entries) => {
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          setIsTransparent(true)
        }else {
          setIsTransparent(false)
        }
      })
    };
    const observer = new IntersectionObserver(cb);
    observer.observe(target.current)
  },[])
  const classes = useStyles();

  return (
    <>
      <SEO title="イノラボ" />
      <Header
        siteTitle="INOLABO"
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isTransparent={isTransparent}
      />
      <Image height="100vh" filename="whiteImage.jpg" alt="heroイメージ" />
      <div ref={target} style={{position: "absolute", top: 0}}></div>
      <div className={classes.heroTxtBox}>
        <Typography align="left" component="h1" className={classes.heroTxtH1}>
          想像を形にする。
        </Typography>
        <Typography align="left" component="h1" className={classes.heroTxtH2}>
          INOLABOは<br/>
          明瞭な価格と確かな技術を約束します。
        </Typography>
        <h1 className={classes.heroTxtH2}>
          <CustomBtn title="お問い合わせ" iconComponent={<MailOutlineIcon />} bgColor="#F2994A" />
        </h1>
      </div>

      <SectionSolution />
      <SectionConv />
      <SectionWorks />
      <SectionAbout />
      <SectionConv />
      <Footer />
    </>
  )
}
export default IndexPage
