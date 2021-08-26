import React from "react"
import { Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  navTxtEn: {
    fontSize: "16px",
    color: "#fff",
  },
  navTxt: {
    fontSize: "14px",
    color: "#fff",
  },
}))

const Footer: React.FC = () => {
  const classes = useStyles()
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-social">
          <Typography align="left" variant="h4">
            INOLABO
          </Typography>
          <Typography align="left" variant="body2">
            © {new Date().getFullYear()} INOLABO, All Right Reserved
          </Typography>
          {/* <div className="footer-social-icons">
            <a
              target="_blank"
              href="https://twitter.com/"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="tw-icon">
                <TiSocialTwitter className="footer-social-icon" />
              </span>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="yt-icon">
                <TiSocialYoutube className="footer-social-icon" />
              </span>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="li-icon">
                <TiSocialLinkedin className="footer-social-icon" />
              </span>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="fb-icon">
                <TiSocialFacebook className="footer-social-icon" />
              </span>
            </a>
          </div> */}
        </div>
        <div id="nav">
          <ul>
            <li>
              <Link to="/#solution">
                <span className={classes.navTxtEn}>SOLUTION</span>
                <br />
                <span className={classes.navTxt}>事業</span>
              </Link>
            </li>
            <li>
              <Link to="/#works">
                <span className={classes.navTxtEn}>WORKS</span>
                <br />
                <span className={classes.navTxt}>制作事例</span>
              </Link>
            </li>
            <li>
              <Link to="/#about">
                <span className={classes.navTxtEn}>ABOUT</span>
                <br />
                <span className={classes.navTxt}>INOLABOとは</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <span className={classes.navTxtEn}>BLOG</span>
                <br />
                <span className={classes.navTxt}>ブログ</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer
