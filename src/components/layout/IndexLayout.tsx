import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { css } from '@emotion/react'
import { Header } from '../header'
import { StaticImage } from 'gatsby-plugin-image'

const style = {
  wrapper: css`
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 1.0875rem 1.45rem;
  `,
}

interface IndexLayoutProps {
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

export const IndexLayout: React.FC<IndexLayoutProps> = ({ children }) => {
  const data = useStaticQuery<GatsbyTypes.IndexLayoutQuery>(graphql`
    query IndexLayout {
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
      <StaticImage
        layout="fullWidth"
        src="../../images/background.png"
        alt="背景画像"
        placeholder="blurred"
        style={{ height: '500px', marginBottom: '20px' }}
      />
      <div css={style.wrapper}>{children}</div>
    </main>
  )
}
