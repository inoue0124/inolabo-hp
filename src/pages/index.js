import React, { useState } from "react"

import Image from "../components/image"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import "../styles/styles.css"

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
      <SEO title="About Blog Boost Starter" />
      <div>
        <Image filename="whiteImage.jpg" alt="Gatsbyスペースマン" />
        <h1>INOLABO</h1>

        <p>
          This starter is a great way to get blogging using a content manager
          while learning and practicing <strong>JavaScript</strong>,{" "}
          <strong>React</strong>, <strong>Gatsby</strong>, and{" "}
          <strong>GraphQL</strong>,
        </p>

        <div className="about-icons">
          <span role="img" aria-label="Laptop.">
            💻
          </span>
          <span role="img" aria-label="Rocket.">
            🚀
          </span>
        </div>

        <h3>Thanks for visiting!!</h3>
      </div>
      <Footer />
    </>
  )
}
export default IndexPage
