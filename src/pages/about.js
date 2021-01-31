import React from "react"

import Layout from "../components/blog/layout"
import SEO from "../components/seo"
import SectionAbout from "../components/index/sectionAbout"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Blog Boost Starter" />
      <SectionAbout/>
    </Layout>
  )
}
export default AboutPage
