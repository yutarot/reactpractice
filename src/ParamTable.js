import React from 'react'
import { Table, Icon, Input, Popup } from 'semantic-ui-react'
import './ParamTable.css'
import params from './params.json'

class ParamTable extends React.Component {
    render() {
        return <Table striped textAlign='center'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Key</Table.HeaderCell>
                    <Table.HeaderCell>Value</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    params.map((param, index) => {
                        return <Table.Row key={index}>
                            <Table.Cell>{param.name}<Popup trigger={<Icon className='help circle' />} content={param.notes} /></Table.Cell>
                            <Table.Cell><Input placeholder='text' /></Table.Cell>
                        </Table.Row>
                    })
                }
            </Table.Body>
        </Table>
    }
}

export default ParamTable
