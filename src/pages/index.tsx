import React from 'react'
import { Link } from 'gatsby'
import { IndexLayout } from '../components/layout/IndexLayout'

export const IndexPage: React.FC = () => (
  <>
    <h2>Hi people</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/another-page/">Go to another page</Link>
    </p>
    <p>
      <Link to="/all/">See content generated from Markdown files</Link>
    </p>
  </>
)

const LayoutIndexPage = () => (
  <IndexLayout>
    <IndexPage />
  </IndexLayout>
)

export default LayoutIndexPage
