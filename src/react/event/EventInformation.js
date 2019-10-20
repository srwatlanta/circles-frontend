import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import EditEventForm from './EditEventForm';
import Radium from 'radium'

const style = {
    image: {
        borderRadius: '5%'
    },
    head: {
        marginLeft: '.5em'
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
        return (
            <div>
                <h1 style={style.head}>{this.props.event.name}</h1>
                <img
                    src={this.props.event.img_url}
                    width='800'
                    style={style.image}
                />
                <h3>{this.props.event.location}</h3>
                <h5>{this.props.event.date}</h5>
                <h5>{this.props.event.start_time}</h5>
                <p>{this.props.event.price}</p>
                <p><strong>Hosted By: {this.props.event.user.name}</strong></p>
                {this.props.user.id === this.props.event.user.id ? <Button onClick={this.handleClick}>Edit Event</Button> : null}
                {this.state.modalClicked && <EditEventForm modalClicked={this.state.modalClicked} closeModal={this.closeModal} event={this.props.event}/>}
            </div>    
        );
    }
}

export default Radium(EventInformation);