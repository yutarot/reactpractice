import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import styles from './App.css'

const ContainerExampleText = () => (
  <div className={styles.hoge}>
    <Container className='' text>
      <Header as='h1'>Header</Header>
    </Container>
    <Container text>
      <div>content here.</div>
    </Container>
    <Container text>
      <span>footer</span>
    </Container>
  </div>
)

export default ContainerExampleText