import { Link, useStaticQuery, graphql, navigate } from "gatsby"
import React, { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { IoIosSearch } from "react-icons/io"
import CustomBtn from "../button"
import MailOutlineIcon from "@material-ui/icons/MailOutline"

type Props = {
  siteTitle: string
  isMenuOpen: boolean
  setMenuOpen: (flag: boolean) => void
}

const Header: React.FC<Props> = ({ siteTitle, isMenuOpen, setMenuOpen }) => {
  const [query, setQuery] = useState<string>("")
  const data = useStaticQuery<GatsbyTypes.HeaderQuery>(graphql`
    query Header {
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
            if (isMenuOpen) {
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
                navigate(`/blog?s=${query.toLowerCase()}`)
              }}
            >
              <input
                type="text"
                aria-label="Search"
                onChange={e => setQuery(e.target.value)}
              />
            </form>
            <IoIosSearch />
          </div>
          <ul>
            <li>
              <Link to="/blog">トップ</Link>
            </li>
            {data.allTopicsJson.edges.map(({ node }: any) => (
              <li key={node.slug}>
                <Link to={`/${node.slug}`}>{node.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/about">INOLABOについて</Link>
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

          {isMenuOpen ? (
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
      {isMenuOpen && (
        <div id="menu">
          <ul>
            {data.allTopicsJson.edges.map(({ node }: any) => (
              <li key={node.slug}>
                <Link to={`/${node.slug}`}>{node.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/about">INOLABOについて</Link>
            </li>
            <li style={{ borderBottom: "none" }}>
              <CustomBtn
                title="お仕事の依頼"
                iconComponent={<MailOutlineIcon />}
                bgColor="primary"
                to="/"
              />
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
