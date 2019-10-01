import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import EditEventForm from './EditEventForm';

const style = {
    image: {
        borderRadius: '50%'
    }
}

class EventInformation extends Component {

    state = {
        modalClicked: false,
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
        console.log(this.props.event)
        return (
            <Container>
                <img
                src={this.props.event.img_url}
                style={style.image}
                width='900'
                />
                <h1>{this.props.event.name}</h1>
                <h3>{this.props.event.location}</h3>
                <h5>{this.props.event.date}</h5>
                <h5>{this.props.event.start_time}</h5>
                <p>{this.props.event.price}</p>
                <p>Hosted By: {this.props.event.user.name}</p>
                {this.props.user.id === this.props.event.user.id ? <Button onClick={this.handleClick}>Edit Event</Button> : null}
                {this.state.modalClicked && <EditEventForm modalClicked={this.state.modalClicked} closeModal={this.closeModal} event={this.props.event}/>}
            </Container>    
        );
    }
}

export default EventInformation;