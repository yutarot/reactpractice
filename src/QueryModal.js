import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

class QueryModal extends React.Component {
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

export default QueryModal