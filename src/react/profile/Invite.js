import React, { Component } from 'react';
import {ListGroup, Row, Button, Dropdown, ButtonGroup} from 'react-bootstrap'

const style = {
    image: {
        borderRadius: '50%',
        marginRight: '1em'
    },
    event: {
        marginRight: '5em'
    },
    row: {
        backgroundColor: '#ced4d9'
    },
    button: {
        width: '100'
    }
}

class Invite extends Component {

    buttonColor = () => {
        switch(this.props.invite.status){
        case 'going':
            return "success"
        case 'invited':
            return "info"
        case 'not going':
            return "danger"
        }
    }
    render() {
        return (
            <ListGroup.Item style={style.row}>
                <Row >
                <img 
                src={this.props.invite.event.img_url}
                style={style.image}
                width= '45'
                />
                <h3 style={style.event}>{this.props.invite.event.name}</h3>
                    <Dropdown className='ml-auto' as={ButtonGroup}>
                        <Button variant={this.buttonColor()}>{this.props.invite.status}
                        </Button>
                        <Dropdown.Toggle split variant={this.buttonColor()} id="dropdown-split-basic" />
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Invited</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Going</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Decline</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>                
                </Row>
            </ListGroup.Item>
        );
    }
}

export default Invite;