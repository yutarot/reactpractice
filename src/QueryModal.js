import React, { Component } from 'react'
import { Input, Modal } from 'semantic-ui-react'

export default class QueryModal extends Component {
    state = { modalOpen: false }

    handleOpen = (e) => {
        if (e.key === 'Enter') {
            this.setState({ modalOpen: true })
        }
    }

    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            <Modal
                trigger={<Input placeholder='text' onKeyPress={this.handleOpen} />}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                content='simple content'
            />
        )
    }
}