import React from "react"
import { SEO, Layout, Banner, Form } from 'containers';
import { GlobalStyle } from 'styled';

const IndexPage = () => (
  <Layout>
    <SEO title="Career Karma" />
    <GlobalStyle />
    <Banner />
    <Form />
  </Layout>
)

export default IndexPage
