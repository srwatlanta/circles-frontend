import React, { Component } from 'react';
import {Card} from 'react-bootstrap'
import Radium from 'radium'

const style = {
    image: {
        borderRadius: '50%'
    },
    card: {
        width: '10rem',
        margin: '1em',
    },
    attendButton: {
        backgroundColor: '#00539c',
        color: 'white',
        minWidth: '9.5em',
        width: '10rem',
        margin: '1em',
        boxShadow: '2px 3px 7px grey'
    },
    declineButton: {
        backgroundColor: '#ff6f61',
        minWidth: '9.5em',
        width: '10rem',
        margin: '1em',
        boxShadow: '2px 3px 7px grey'
    },
    inviteButton: {
        backgroundColor: '#838487',
        width: '10rem',
        margin: '1em',
        boxShadow: '2px 3px 7px grey'
    },
    text: {
        fontSize: '1em',
        color: 'white'
    }
}

class EventAttendanceCard extends Component {

    cardColor = () => {
        switch(this.props.status){
        case 'Attending':
            return style.attendButton
        case 'Declined':
            return style.declineButton
        case 'Invited':
            return style.inviteButton
        }
    }


    render() {
        return (
            <Card style={this.cardColor()}>
                <Card.Img variant="top" src={this.props.user.img_url} width='75' />
                <Card.Body>
                    <Card.Title style={style.text}>{this.props.user.username}</Card.Title>
                    <Card.Text><strong>{this.props.status}</strong></Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Radium(EventAttendanceCard);