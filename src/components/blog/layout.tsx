import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, PageProps } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../../styles/styles.css"

const Layout: React.FC = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const data = useStaticQuery<GatsbyTypes.BlogTitleQuery>(graphql`
    query BlogTitle {
      site {
        siteMetadata {
          title
        }
      }
      allTopicsJson {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site?.siteMetadata?.title || `Title`}
        isMenuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer props={data.allTopicsJson.edges} />
    </>
  )
}

export default Layout
