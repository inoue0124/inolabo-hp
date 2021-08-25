import React from "react"

import Layout from "../components/blog/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: ページが見つかりません" />
    <div
      style={{ marginTop: "100px", marginBottom: "50px", textAlign: "center" }}
    >
      <h1>404</h1>
      <div>
        <Image filename="sorry" width="200px" alt="404"></Image>
      </div>
      <p style={{ marginTop: "30px" }}>お探しのページが見つかりません。</p>
      <p>一時的にアクセスできない状況にあるか、</p>
      <p>移動もしくは削除された可能性があります。</p>
    </div>
  </Layout>
)

export default NotFoundPage
