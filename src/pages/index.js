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
  sectionTitle: {
    textAlign: "center"
  }
}));

const IndexPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)

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
        <Image filename="whiteImage.jpg" alt="heroイメージ" />

        <SectionWorks />
        <SectionConv />
      </div>
      <Footer />
    </>
  )
}
export default IndexPage
