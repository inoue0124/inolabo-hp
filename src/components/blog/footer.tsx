import React from "react"
import { Link } from "gatsby"
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialYoutube,
} from "react-icons/ti"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import CustomBtn from "../button"
import MailOutlineIcon from "@material-ui/icons/MailOutline"

const useStyles = makeStyles(theme => ({
  navTxt: {
    fontSize: "14px",
    color: "#fff",
  },
}))

type Props = {
  name: string
  slug: string
}

const Footer: React.FC<{ props: any }> = ({ props }) => {
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
          <div className="footer-social-icons">
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
          </div>
        </div>
        <div id="nav">
          <ul>
            <li>
              <Link to="/blog">
                <span className={classes.navTxt}>トップ</span>
              </Link>
            </li>
            {props.map((prop: any) => (
              <li key={prop.node.slug}>
                <Link to={`/${prop.node.slug}`}>
                  <span className={classes.navTxt}>{prop.node.name}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link to="/about">
                <span className={classes.navTxt}>INOLABOについて</span>
              </Link>
            </li>
            <li>
              <CustomBtn
                title="お仕事の依頼"
                iconComponent={<MailOutlineIcon />}
                bgColor="primary"
                to="/"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer
