import React, { Component } from 'react';
import {ListGroup, Row, Button, Dropdown, ButtonGroup} from 'react-bootstrap'
import {connect} from 'react-redux'
import {updateInviteStatus} from '../../redux/actions/inviteActions'
import {Link} from 'react-browser-router'
import {clearFriend} from '../../redux/actions/friendshipActions'
import Radium from 'radium'



const style = {
    image: {
        borderRadius: '50%',
        marginRight: '1em'
    },
    event: {
        marginRight: '2em',
        color: '#3d4849',
        ':hover': {
            textDecoration: 'underline',
            textDecorationColor: '#3d4849'
        }
    },
    row: {
        backgroundColor: 'white',
        borderRadius: '5px',
    },
    attendButton: {
        backgroundColor: '#00539c',
        border: '1px solid black',
        minWidth: '9.5em',
        cursor: 'default'
    },
    declineButton: {
        backgroundColor: '#ff6f61',
        border: '1px solid black',
        minWidth: '9.5em',
        cursor: 'default'
    },
    inviteButton: {
        backgroundColor: '#838487',
        border: '1px solid black',
        minWidth: '9.5em',
        cursor: 'default'
    },
    attendDrop: {
        backgroundColor: '#00539c',
        border: '1px solid black'
    },
    declineDrop: {
        backgroundColor: '#ff6f61',
        border: '1px solid black'
    },
    inviteDrop: {
        backgroundColor: '#838487',
        border: '1px solid black'
    }
}

class Invite extends Component {

    color = {}

    buttonColor = () => {
        switch(this.props.invite.status){
        case 'Attending':
            return style.attendButton
        case 'Declined':
            return style.declineButton
        case 'Invited':
            return style.inviteButton
        }
    }

    dropColor = () => {
        switch(this.props.invite.status){
        case 'Attending':
            return style.attendDrop
        case 'Declined':
            return style.declineDrop
        case 'Invited':
            return style.inviteDrop
        }
    }

    
    handleChange = (event) => {
        this.props.updateInviteStatus(this.props.invite.id, event.target.name)
    }
    
    render() {
        this.color.button = this.buttonColor()
        this.color.drop = this.dropColor()
        return (
            <ListGroup.Item style={style.row}>
                <Row >
                    <img 
                    src={this.props.invite.event.img_url}
                    style={style.image}
                    width= '45'
                    height='40'
                    />
                    <Link to={`/events/${this.props.invite.event.id}`} onClick={this.props.clearFriend}>
                    <h4 style={style.event}>{this.props.invite.event.name}</h4>
                    </Link>
                    <Dropdown className='ml-auto' as={ButtonGroup} >
                        <Button style={style.button, this.color.button} >{this.props.invite.status}
                        </Button>
                        <Dropdown.Toggle split style={this.color.drop} id="dropdown-split-basic" />
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={this.handleChange} name='Attending'>Attend</Dropdown.Item>
                            <Dropdown.Item onClick={this.handleChange} name='Declined'>Decline</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>               
                </Row>
            </ListGroup.Item>
        );
    }
}

export default connect(null, {updateInviteStatus, clearFriend})(Radium(Invite));