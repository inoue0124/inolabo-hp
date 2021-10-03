import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { NavLinks } from './NavLinks'

const style = {
  header: css`
    background: #fff;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 100;
  `,
  wrapper: css`
    margin: 0 auto;
    max-width: 1280px;
    padding: 1.0875rem;
    display: flex;
    align-items: center;
  `,
  title: css`
    margin: 0;
    display: inline;
    font-size: 30px;
  `,
}

const TitleLink = styled(Link)`
  color: #000;

  &:active,
  &:hover {
    opacity: 0.5;
  }
`

interface HeaderProps {
  readonly title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => (
  <header css={style.header}>
    <div css={style.wrapper}>
      <h1 css={style.title}>
        <TitleLink to="/">{title}</TitleLink>
      </h1>
      <NavLinks />
    </div>
  </header>
)
