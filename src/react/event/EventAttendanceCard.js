import React, { Component } from 'react';
import {Card} from 'react-bootstrap'

const style = {
    image: {
        borderRadius: '50%'
    },
    card: {
        width: '12rem',
        margin: '1em'

    }
}

class EventAttendanceCard extends Component {

    cardColor = () => {
        switch(this.props.status){
        case 'Attending':
            return "success"
        case 'Invited':
            return "info"
        case 'Declined':
            return "danger"
        }
    }

    render() {
        return (
            <Card bg={this.cardColor()} style={style.card}>
                <Card.Img variant="top" src={this.props.user.img_url} style={style.image} width='75' />
                <Card.Body>
                    <Card.Title>{this.props.user.username}</Card.Title>
                    <Card.Text>{this.props.status}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default EventAttendanceCard;