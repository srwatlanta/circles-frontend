import React, { Component } from 'react';
import {ListGroup, Row, Button, Dropdown, ButtonGroup} from 'react-bootstrap'
import {connect} from 'react-redux'
import {updateInviteStatus} from '../../redux/actions/inviteActions'
import {Link} from 'react-browser-router'


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
        case 'Attending':
            return "success"
        case 'Invited':
            return "info"
        case 'Declined':
            return "danger"
        }
    }

    handleChange = (event) => {
        this.props.updateInviteStatus(this.props.invite.id, event.target.name)
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
                    <Link to={`/events/${this.props.invite.id}`}>
                    <h3 style={style.event}>{this.props.invite.event.name}</h3>
                    </Link>
                    <Dropdown className='ml-auto' as={ButtonGroup} >
                        <Button variant={this.buttonColor()}>{this.props.invite.status}
                        </Button>
                        <Dropdown.Toggle split variant={this.buttonColor()} id="dropdown-split-basic" />
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={this.handleChange} name='Invited'>Invited</Dropdown.Item>
                            <Dropdown.Item onClick={this.handleChange} name='Attending'>Attend</Dropdown.Item>
                            <Dropdown.Item onClick={this.handleChange} name='Declined'>Decline</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>                
                </Row>
            </ListGroup.Item>
        );
    }
}

export default connect(null, {updateInviteStatus})(Invite);