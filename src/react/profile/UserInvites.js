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
        marginLeft: '11.2em',
        width: '35em',
        borderRadius: '5px',
        backgroundColor: 'orange',
        borderColor: '#d6942c',
        color: 'white',
        minHeight: '40px',
        fontWeight: '600',
        letterSpacing: '0.05em',
        ':hover': {
            border: '2px solid #9D6600',
            fontWeight: '800'        
        }
    },
    list: {
        margin: '0 auto 0 auto',
        minWidth: '35em',
        maxHeight: '16.3em',
        overflow: 'auto',
    },
    head: {
        fontSize: '1.5em'
    },
    top: {
        marginLeft: '11em',
        display: 'inline-block'
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
            <div style={style.section}>
                <Row style={style.top}>
                    {this.props.invites.length > 0 ? <h1><strong style={style.head}>Invites</strong></h1> : null}
                </Row>
                <Row>
                    <ListGroup style={style.list}>
                        {this.renderInvites()}
                        {this.state.modalClicked && <CreatEventForm user={this.props.user} modalClicked={this.state.modalClicked} closeModal={this.closeModal}/>}
                    </ListGroup>
                </Row>
                <button onClick={this.handleClick} style={style.button}>Create New Event</button>
            </div>
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