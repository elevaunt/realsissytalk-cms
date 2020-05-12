import React from 'react'
import Layout from '../components/compositions/Layout'
import Container from "../components/elements/layout/Container"
import Column from "../components/elements/layout/Column"
import Heading from "../components/elements/typography/Heading"
import Link from "../components/elements/basic/Link"

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Column>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <p>It's probably best to just return to the</p>
        <Heading kind="h2"><Link href="/">Real Sissy Talk homepage</Link></Heading>
      </Column>
    </Container>
  </Layout>
)

export default NotFoundPage
