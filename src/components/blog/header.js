import { Link, useStaticQuery, graphql, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { IoIosSearch } from "react-icons/io"
import CustomBtn from '../button'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

const Header = ({ siteTitle, menuOpen, setMenuOpen }) => {
  const data = useStaticQuery(graphql`
    {
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
    <header id="header">
      <div className="container">
        <button
          id="site-logo-wrapper"
          onClick={() => {
            if (menuOpen) {
              setMenuOpen(false)
            }
          }}
        >
          <Link
            to="/blog"
            id="site-logo"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </button>

        <nav id="nav">
          <div id="search-box">
            <form
              onSubmit={e => {
                e.preventDefault()
                navigate(`/blog?s=${e.target.query.value.toLowerCase()}`)
              }}
            >
              <input type="text" id="query" aria-label="Search" />
            </form>
            <IoIosSearch />
          </div>
          <ul>
            <li>
              <Link to="/blog">トップ</Link>
            </li>
            {data.allTopicsJson.edges.map(({ node }) => (
              <li key={node.slug}>
                <Link to={`/${node.slug}`}>{node.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/about">INOLABOについて</Link>
            </li>
            <li>
              <CustomBtn title="お仕事の依頼" iconComponent={<MailOutlineIcon />} bgColor="primary" to="/"/>
            </li>
          </ul>
          
          {menuOpen ? (
            <button className="menu-button" onClick={() => setMenuOpen(false)}>
              <MdClose />
            </button>
          ) : (
            <button className="menu-button" onClick={() => setMenuOpen(true)}>
              <FiMenu />
            </button>
          )}
        </nav>
      </div>
      {menuOpen && (
        <div id="menu">
          <ul>
            {data.allTopicsJson.edges.map(({ node }) => (
              <li key={node.slug}>
                <Link to={`/${node.slug}`}>{node.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/about">INOLABOについて</Link>
            </li>
            <li style={{borderBottom: 'none'}}>
              <CustomBtn title="お仕事の依頼" iconComponent={<MailOutlineIcon />} bgColor="primary" to="/"/>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
