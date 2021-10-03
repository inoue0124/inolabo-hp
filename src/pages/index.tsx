import React from 'react'
import { Link } from 'gatsby'
import { IndexLayout } from '../components/layout/IndexLayout'
import { PopularArticles } from '../components/PopularArticles'

export const IndexPage: React.FC = () => (
  <>
    <h2>Hi people</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </>
)

const LayoutIndexPage = () => (
  <IndexLayout>
    <PopularArticles />
    <IndexPage />
  </IndexLayout>
)

export default LayoutIndexPage
