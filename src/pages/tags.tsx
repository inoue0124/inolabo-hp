import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'
import { Layout } from '../components/Layout'

interface TagsPageProps {
  readonly data: GatsbyTypes.TagListPageQuery
}

const TagsPage: React.FC<TagsPageProps> = ({ data }) => {
  return (
    <Layout>
      <Helmet title="Tags" />
      <div>
        <h2>Tags</h2>
        <ul>
          {data.allMdx.group.map(({ tag, totalCount }) => (
            <li key={tag}>
              <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link> ({totalCount})
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default TagsPage

export const query = graphql`
  query TagListPage {
    allMdx(filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
