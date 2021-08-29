import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'
import Three from '../components/Three'

export const IndexPage: React.FC = () => (
  <>
    <Three></Three>
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
  <Layout>
    <IndexPage />
  </Layout>
)

export default LayoutIndexPage
