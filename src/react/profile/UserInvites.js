import React, { Component } from 'react';
import {Row, ListGroup, Button, Modal, Form} from 'react-bootstrap'
import Invite from './Invite'
import uuid from 'uuid'
import {connect} from 'react-redux'
import CreatEventForm from './CreateEventForm'
import Radium from 'radium'

const style = {
    section: {
        width: '60%',
        margin: 'auto',
        borderRadius: '25px',
        border: '20px solid #6A6A72',
        paddingBottom: '3em',
        boxShadow: '3px 7px 12px grey',
        maxHeight: '450px'
    },
    button: {
        width: '60%',
        borderRadius: '5px',
        backgroundColor: 'orange',
        borderColor: '#d6942c',
        color: '#515158',
        minHeight: '40px',
        fontWeight: '600',
        letterSpacing: '0.05em',
        ':hover': {
            border: '2px solid #9D6600',
            fontWeight: '800'        
        }
    },
    list: {
        minWidth: '60%',
        maxHeight: '340px',
        overflow: 'auto',
    },
    head: {
        fontSize: '1.5em'
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
                    {this.props.invites.length > 0 ? <h1><strong style={style.head}>Invites</strong></h1> : null}
                    {this.renderInvites()}
                    {this.state.modalClicked && <CreatEventForm user={this.props.user} modalClicked={this.state.modalClicked} closeModal={this.closeModal}/>}
                </ListGroup>
                <button onClick={this.handleClick} style={style.button}>Create New Event</button>
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