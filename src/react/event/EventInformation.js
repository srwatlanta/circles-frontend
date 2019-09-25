import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

const style = {
    image: {
        borderRadius: '50%'
    }
}

class EventInformation extends Component {
    render() {
        return (
            <Container>
                <img
                src={this.props.event.img_url}
                style={style.image}
                width='900'
                />
                <h1>{this.props.event.name}</h1>
                <h3>{this.props.event.location}</h3>
                <h5>{this.props.event.start_time}</h5>
                <p>{this.props.event.price}</p>
                <p>Hosted By: {this.props.event.user.name}</p>
            </Container>
        );
    }
}

export default EventInformation;