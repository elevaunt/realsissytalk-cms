import React from 'react'

import Layout from '../../../components/compositions/Layout'
import Container from "../../../components/elements/layout/Container"
import Button from "../../../components/elements/basic/Buttons"


export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <div>
            <h2>Buttons</h2>
            <div>
              <Button kind="small" size="small">Small</Button>
            </div>
            <div>
              <Button kind="medium" size="medium">Medium</Button>
            </div>
            <div>
              <Button kind="large" size="large">Large</Button>
            </div>
          </div>
        </Container>
      </Layout>
    )
  }
}
