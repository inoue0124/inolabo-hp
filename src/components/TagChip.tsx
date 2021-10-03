/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

const Chip = styled('span')`
  font-size: 14px;
  border-radius: 16px;
  padding: 8px;
  margin: 4px 0;
  margin-right: 4px;
  display: inline-block;
`

interface TagChipProps {
  readonly name: string
}

export const TagChip: React.FC<TagChipProps> = ({ name }) => {
  return <Chip sx={{ backgroundColor: 'subLayer', color: 'subText' }}>{name}</Chip>
}
