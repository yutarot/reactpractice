import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

export default class QueryModal extends Component {
    state = { open: false }

    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, dimmer } = this.state
        return (
            <div>
                <Button onClick={this.show('blurring')}>create query</Button>
                <Modal dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Content>
                        <Modal.Description>
                            <a target='_blank' rel='noopener noreferrer' href='https://google.com'>google.com</a>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}