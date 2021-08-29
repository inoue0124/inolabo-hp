import { css } from '@emotion/react'
import { Link } from 'gatsby'

interface ContentListProps {
  readonly edges:
    | GatsbyTypes.IndexPageQuery['allMdx']['edges']
    | GatsbyTypes.TagPageQuery['allMdx']['edges']
}

const list = css`
  line-height: 1.8;
  list-style: none;
  padding: 0;
  margin: 1rem 0 2rem;
`

const item = css``

export const ContentList: React.FC<ContentListProps> = ({ edges }) => (
  <ul css={list}>
    {edges.map(({ node }) => {
      if (!node.frontmatter) {
        throw new Error('frontmatter is undefined')
      }
      const { path, title } = node.frontmatter
      return (
        <li css={item} key={path}>
          <Link to={path!}>{title}</Link> ({node.frontmatter.date})
        </li>
      )
    })}
  </ul>
)
