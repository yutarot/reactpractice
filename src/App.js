import React from 'react'
import { Button, Container, Header, Modal } from 'semantic-ui-react'
import './App.css'
import ParamTable from './ParamTable'
import packageJson from '../package.json'

const githubUrl = 'https://github.com/yutarot/reactpractice'

class App extends React.Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state
    return <div>
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
          <Button onClick={this.show('blurring')}>create query</Button>
        </main>
        <footer className='appFooter'>
          {packageJson.name}
          <span className='version'>
            <a href={githubUrl}>{packageJson.version}</a>
          </span>
        </footer>
      </Container>
      <Modal dimmer={dimmer} open={open} onClose={this.close}>
        <Modal.Content>
          <Modal.Description>
            <a target='_blank' rel='noopener noreferrer' href='https://google.com'>google.com</a>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  }
}
export default App