import React from 'react'
import { Button, Container, Header } from 'semantic-ui-react'
import './App.css'
import ParamTable from './ParamTable'
import packageJson from '../package.json'

const githubUrl = 'https://github.com/yutarot/reactpractice'

const App = () => (
  <Container className='appRoot'>
    <header className='appHeader'>
      <Header as='h1'>
        {packageJson.name}
        <span className='version'>
          <a href={githubUrl}>{packageJson.version}</a>
        </span>
      </Header>
    </header>
    <main className='appBody'>
      <Header as='h3'>[Options]</Header>
      <ParamTable />
      <Button>create query</Button>
    </main>
    <footer className='appFooter'>
      {packageJson.name}
      <span className='version'>
        <a href={githubUrl}>{packageJson.version}</a>
      </span>
    </footer>
  </Container>
)

export default App