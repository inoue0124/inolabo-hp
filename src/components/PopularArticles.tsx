import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { ArticleCard } from './ArticleCard'
import { SectionHeader } from './SectionHeader'

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 16px;
`

export const PopularArticles: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.PopularArticlesQuery>(graphql`
    query PopularArticles {
      allMdx(
        filter: {
          frontmatter: { title: { eq: "個人開発のマーケティングには「自分メディア」が効く" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              createdAt
              updatedAt
              tags
              thumbnail {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, aspectRatio: 1.618)
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section>
      <SectionHeader title="人気記事一覧" link="/all/" linkText="もっと見る"></SectionHeader>
      <Wrapper>
        <ArticleCard
          path={data.allMdx.edges[0].node.frontmatter?.path!}
          title={data.allMdx.edges[0].node.frontmatter?.title!}
          thumbnail={data.allMdx.edges[0].node.frontmatter?.thumbnail}
          tags={data.allMdx.edges[0].node.frontmatter?.tags!}
          createdAt={data.allMdx.edges[0].node.frontmatter?.createdAt!}
          updatedAt={data.allMdx.edges[0].node.frontmatter?.updatedAt!}
        />
        <ArticleCard
          path={data.allMdx.edges[0].node.frontmatter?.path!}
          title={data.allMdx.edges[0].node.frontmatter?.title!}
          thumbnail={data.allMdx.edges[0].node.frontmatter?.thumbnail}
          tags={data.allMdx.edges[0].node.frontmatter?.tags!}
          createdAt={data.allMdx.edges[0].node.frontmatter?.createdAt!}
          updatedAt={data.allMdx.edges[0].node.frontmatter?.updatedAt!}
        />
        <ArticleCard
          path={data.allMdx.edges[0].node.frontmatter?.path!}
          title={data.allMdx.edges[0].node.frontmatter?.title!}
          thumbnail={data.allMdx.edges[0].node.frontmatter?.thumbnail}
          tags={data.allMdx.edges[0].node.frontmatter?.tags!}
          createdAt={data.allMdx.edges[0].node.frontmatter?.createdAt!}
          updatedAt={data.allMdx.edges[0].node.frontmatter?.updatedAt!}
        />
      </Wrapper>
    </section>
  )
}
