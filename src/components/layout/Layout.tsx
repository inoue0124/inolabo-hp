import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { css } from '@emotion/react'
import { Header } from '../header'

const wrapper = css`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.0875rem 1.45rem;
`

interface LayoutProps {
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery<GatsbyTypes.SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  if (!data.site?.siteMetadata) {
    throw new Error('siteMetadata is undefined')
  }

  return (
    <main>
      <Helmet
        titleTemplate={`%s - ${data.site.siteMetadata.title}`}
        defaultTitle={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: data.site.siteMetadata.description,
          },
          {
            name: 'keywords',
            content: 'gatsby, gatsbyjs, sample, demo, typescript',
          },
        ]}
      />
      <Header title={data.site.siteMetadata.title!} />
      <div css={wrapper}>{children}</div>
    </main>
  )
}
