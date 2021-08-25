import React, { useState, useEffect, useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Header from "../components/index/header"
import Footer from "../components/index/footer"
import SEO from "../components/seo"
import "../styles/styles.css"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "100px",
    textAlign: "center",
  },
  txt: {
    color: "#505050",
    fontSize: "28px",
  },
}))

const InquiryPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const classes = useStyles()

  return (
    <>
      <SEO title="イノラボ" />
      <Header
        siteTitle="INOLABO"
        isMenuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isTransparent={false}
      />
      <div className={classes.root}>
        <Typography align="center" component="h1" className={classes.txt}>
          お問い合わせ
        </Typography>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdBmAtRkJS2f9HUo3GGm3aniOawFqt1ZxAAx4_vHUJeBC1-SQ/viewform?embedded=true"
          width="100%"
          height="1200"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          style={{ margin: "auto" }}
        >
          読み込んでいます…
        </iframe>
      </div>
      <Footer />
    </>
  )
}
export default InquiryPage
