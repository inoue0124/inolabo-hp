/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Maybe } from 'graphql/jsutils/Maybe'
import { css } from '@emotion/react'
import { TagChip } from './TagChip'
import { IoReload } from '@react-icons/all-files/io5/IoReload'

const CadWrapper = styled('div')`
  cursor: pointer;
`
const ImageWrapper = styled('div')`
  overflow: hidden;
  border-radius: 3px;
`
const Title = styled('h5')`
  margin: 10px 0;
`
const TagWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin: -4px 0;
`
const DateWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`
const DateText = styled('span')`
  font-size: 14px;
  margin-right: 8px;
`
const styles = {
  thumbnail: css`
    transition: 0.5s all;
    &:hover {
      transform: scale(1.1, 1.1);
      transition: 0.5s all;
    }
  `,
}

interface ArticleCardProps {
  readonly thumbnail: any
  readonly title: string
  tags: Array<Maybe<string>>
  readonly createdAt: string
  readonly updatedAt?: string
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  thumbnail,
  title,
  tags,
  createdAt,
  updatedAt,
}) => {
  const thumbnailImage = getImage(thumbnail)
  return (
    <CadWrapper
      onClick={() => {
        console.log('haha')
      }}
    >
      <ImageWrapper>
        <GatsbyImage image={thumbnailImage!} alt={title} css={styles.thumbnail} />
      </ImageWrapper>
      <Title>{title}</Title>
      <TagWrapper>
        {tags.map((tag) => (
          <TagChip name={tag!} />
        ))}
      </TagWrapper>
      <DateWrapper>
        <DateText sx={{ color: 'subText' }}>{createdAt}</DateText>
        {updatedAt && (
          <DateText sx={{ color: 'subText' }}>
            <IoReload />
            {updatedAt}
          </DateText>
        )}
      </DateWrapper>
    </CadWrapper>
  )
}
