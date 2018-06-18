import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import './App.css'
import ParamTable from './ParamTable'
import packageJson from '../package.json'
import QueryModal from './QueryModal'

const githubUrl = 'https://github.com/yutarot/reactpractice'

class App extends React.Component {

  render() {
    return <div className='appRoot'>
      <header className='appHeader'>
        <Segment inverted>
          <Header as='h1'>
            <Container>
              {packageJson.name}
              <span className='version'>
                <a href={githubUrl}>{packageJson.version}</a>
              </span>
            </Container>
          </Header>
        </Segment>
      </header>
      <main className='appBody'>
        <Container>
          <Header as='h3'>[Options]</Header>
          <ParamTable />
          <QueryModal />
        </Container>
      </main>
    </div>
  }
}

export default App