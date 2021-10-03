import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'

const style = {
  nav: css`
    margin: auto 0px auto auto;
  `,
  ul: css`
    display: flex;
    list-style: none;
    margin: 0;
  `,
  li: css`
    margin: 0 auto;
    margin-left: 30px;
  `,
}

const NavLink = styled(Link)`
  color: #000;

  &:active,
  &:hover {
    opacity: 0.5;
  }
`

export const NavLinks: React.FC = () => (
  <nav css={style.nav}>
    <ul css={style.ul}>
      <li css={style.li}>
        <NavLink to={'/'}>ホーム</NavLink>
      </li>
      <li css={style.li}>
        <NavLink to={'/'}>サービス開発</NavLink>
      </li>
      <li css={style.li}>
        <NavLink to={'/'}>副業</NavLink>
      </li>
      <li css={style.li}>
        <NavLink to={'/'}>Webエンジニアになるには</NavLink>
      </li>
      <li css={style.li}>
        <NavLink to={'/'}>INOLABOについて</NavLink>
      </li>
      <li css={style.li}>
        <NavLink to={'/'}>お問い合わせ</NavLink>
      </li>
    </ul>
  </nav>
)
