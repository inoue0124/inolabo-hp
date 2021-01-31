import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import CustomBtn from '../button'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  navTxtEn: {
    fontSize: "16px",
    color: "#505050"
  },
  navTxt: {
    fontSize: "14px",
    color: "#505050"
  }
}));

const Header = ({ siteTitle, menuOpen, setMenuOpen, isTransparent }) => {
  const classes = useStyles();

  return (
    <header id="header" className={`${isTransparent ? 'transparent' : ''}`}>
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
            to="/"
            id="site-logo"
          >
            {siteTitle}
          </Link>
        </button>

        <nav id="nav">
          <ul>
            <li>
              <Link to="/#solution">
                <span className={classes.navTxtEn}>SOLUTION</span><br/>
                <span className={classes.navTxt}>事業</span>
              </Link>
            </li>
            <li>
              <Link to="/#works">
                <span className={classes.navTxtEn}>WORKS</span><br/>
                <span className={classes.navTxt}>制作事例</span>
              </Link>
            </li>
            <li>
              <Link to="/#about">
                <span className={classes.navTxtEn}>ABOUT</span><br/>
                <span className={classes.navTxt}>INOLABOとは</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <span className={classes.navTxtEn}>BLOG</span><br/>
                <span className={classes.navTxt}>ブログ</span>
              </Link>
            </li>
            <li>
              <CustomBtn title="お問い合わせ" iconComponent={<MailOutlineIcon />} bgColor="#F2994A" to="/inquiry" />
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
            <li>
              <Link to="/#solution">
                <span className={classes.navTxtEn}>SOLUTION</span><br/>
                <span className={classes.navTxt}>事業</span>
              </Link>
            </li>
            <li>
              <Link to="/#works">
                <span className={classes.navTxtEn}>WORKS</span><br/>
                <span className={classes.navTxt}>制作事例</span>
              </Link>
            </li>
            <li>
              <Link to="/#about">
                <span className={classes.navTxtEn}>ABOUT</span><br/>
                <span className={classes.navTxt}>INOLABOとは</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <span className={classes.navTxtEn}>BLOG</span><br/>
                <span className={classes.navTxt}>ブログ</span>
              </Link>
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
