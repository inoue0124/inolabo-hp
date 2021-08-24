import { Link, useStaticQuery, graphql, navigate } from "gatsby"
import React, { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { IoIosSearch } from "react-icons/io"

type Props = {
  siteTitle: string
  isMenuOpen: boolean
  setMenuOpen: (flag: boolean) => void
  isTransparent: boolean
}

const Header: React.FC<Props> = ({
  siteTitle,
  isMenuOpen,
  setMenuOpen,
  isTransparent,
}) => {
  const [query, setQuery] = useState<string>("")
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
    <header id="header" className={`${isTransparent ? "transparent" : ""}`}>
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
            to="/"
            id="site-logo"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </button>

        <nav id="nav">
          <ul>
            {data.allTopicsJson.edges.map(({ node }: any) => (
              <li key={node.slug}>
                <Link to={`/${node.slug}`}>{node.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
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
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
