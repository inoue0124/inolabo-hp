import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ContentList } from '../components/ContentList'
import { Pager } from '../components/Pager'
import { Layout } from '../components/Layout'
import { ArchivePageContext } from '../utils/context'

interface IndexPageProps {
  readonly data: GatsbyTypes.IndexPageQuery

  readonly pageContext: ArchivePageContext & GatsbyTypes.IndexPageQueryVariables
}

const IndexTemplate: React.FC<IndexPageProps> = ({ data, pageContext }) => (
  <Layout>
    <Helmet
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <h2>All Markdown Content</h2>
    <ContentList edges={data.allMdx.edges} />
    <Pager page={pageContext.page} prefix={pageContext.prefix} total={pageContext.pageTotal} />
    <hr />
    <Link to="/tags">All tags</Link>
  </Layout>
)

export default IndexTemplate

export const query = graphql`
  query IndexPage($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { frontmatter: { draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
