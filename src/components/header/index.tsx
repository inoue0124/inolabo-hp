import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { NavLinks } from './NavLinks'

const style = {
  container: css`
    background: #fff;
  `,
  wrapper: css`
    margin: 0 auto;
    max-width: 1280px;
    padding: 1.0875rem;
    display: flex;
    align-items: center;
  `,
  title: css`
    margin: 0 0 10px 0;
    display: inline;
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
  <header css={style.container}>
    <div css={style.wrapper}>
      <h1 css={style.title}>
        <TitleLink to="/">{title}</TitleLink>
      </h1>
      <NavLinks />
    </div>
  </header>
)
