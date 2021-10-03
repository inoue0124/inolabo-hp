import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Wrapper = styled('div')`
  display: flex;
  align-items: top;
  justify-content: space-between;
  margin-bottom: 20px;
`
const Title = styled('h3')`
  font-weight: 100;
  margin-bottom: 0;
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 1px;
    background-color: #666666;
  }
`

interface SectionHeaderProps {
  readonly title: string
  readonly link?: string
  readonly linkText?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, link, linkText }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {link && linkText && <Link to={link}>{linkText}</Link>}
    </Wrapper>
  )
}
