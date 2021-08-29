import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Layout } from '../components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

interface ContentTemplateProps {
  readonly data: GatsbyTypes.SinglePageQuery
}

const ContentTemplate: React.FC<ContentTemplateProps> = ({ data }) => {
  if (!data.mdx?.frontmatter || !data.mdx?.body) {
    throw new Error('frontmatter is undefined')
  }
  const {
    mdx: { frontmatter, body },
  } = data

  return (
    <Layout>
      <Helmet title={`${frontmatter.title}`} />
      <h2>{frontmatter.title}</h2>
      <h3>{frontmatter.date}</h3>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export default ContentTemplate

export const query = graphql`
  query SinglePage($path: String!) {
    mdx(frontmatter: { draft: { ne: true }, path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        path
        title
      }
    }
  }
`
