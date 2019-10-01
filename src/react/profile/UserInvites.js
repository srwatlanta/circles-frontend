import React, { Component } from 'react';
import {Row, ListGroup, Button, Modal, Form} from 'react-bootstrap'
import Invite from './Invite'
import uuid from 'uuid'
import {connect} from 'react-redux'
import CreatEventForm from './CreateEventForm'
import Radium from 'radium'

const style = {
    section: {
        margin: '4em',
        borderRadius: '25px'
    },
    button: {
        borderRadius: '5px',
        backgroundColor: '#d6942c',
        borderColor: '#d6942c',
        minHeight: '40px',
        ':hover': {
            border: '2px solid black',
            fontWeight: '600'        
        }
    },
    list: {
        maxHeight: '500px',
        overflow: 'auto'
    }
}


class UserInvites extends Component {
    
    state = {
        modalClicked: false
    }
    

    renderInvites = () => {
        return this.props.invites.length > 0 ?
        this.props.invites.map(invite => {
            return(<Invite key={uuid()} invite={invite}/>)
        })
        :
        <h1>Join a Circle or Create an Event!</h1>
    }

    handleClick = () => {
        this.setState({
            modalClicked: true
        })
    }

    closeModal = () => {
        this.setState({
            modalClicked: false
        })
    }

    render() {
        return (
            <Row className="justify-content-md-center" style={style.section}>
                <ListGroup style={style.list}>
                    {this.props.invites.length > 0 ? <h1><strong>Invites</strong></h1> : null}
                    {this.renderInvites()}
                    <button onClick={this.handleClick} style={style.button}>Create New Event</button>                        
                    {this.state.modalClicked && <CreatEventForm user={this.props.user} modalClicked={this.state.modalClicked} closeModal={this.closeModal}/>}
                </ListGroup>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user, 
        invites: state.invites
    }
}

export default connect(mapStateToProps)(Radium(UserInvites));