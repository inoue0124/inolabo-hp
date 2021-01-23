import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Image from "../components/image"
import Header from "../components/header"
import Footer from "../components/footer"
import SectionWorks from "../components/index/sectionWorks"
import SectionConv from "../components/index/sectionConv"
import SEO from "../components/seo"
import "../styles/styles.css"


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
    }
  },
  heroTxtH2: {
    margin: "0 auto",
    width: "1200px",
    fontSize: "24px",
    "@media (max-width: 1300px)": {
      width: "758px",
    }
  }
}));

const IndexPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const classes = useStyles();

  return (
    <>
      <Header
        siteTitle="INOLABO"
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isTransparent={true}
      />
      <SEO title="イノラボ" />
      <div>
        <Image height="100vh" filename="whiteImage.jpg" alt="heroイメージ" />
        <p className={classes.heroTxtBox}>
          <p className={classes.heroTxtH1}>想像を形にする。</p>
          <p className={classes.heroTxtH2}>
            INOLABOは<br/>
            明瞭な価格と確かな技術を約束します。
          </p>
        </p>

        <SectionWorks />
        <SectionConv />
      </div>
      <Footer />
    </>
  )
}
export default IndexPage
