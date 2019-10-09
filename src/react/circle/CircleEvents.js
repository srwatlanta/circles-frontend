import React, { Component } from 'react';
import {Row, Carousel, Container, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-browser-router'
import Radium from 'radium'
import CreateEventForm from '../profile/CreateEventForm'
import '../../App.css'


const style = {
    head: {
        fontSize: '3.5em',
        whiteSpace: 'nowrap'
    },
    add:{
        fontSize: '2.2em',
        // marginLeft: '-2em',
        whiteSpace: 'nowrap'
    },
    text: {
        fontSize: '1.7em',
        whiteSpace: 'nowrap'
    },
    button: {
        backgroundColor: 'orange',
        border: '1px solid orange',
        boxShadow: '1px 2px 4px grey'
    },
    container: {
        marginTop: '8em',
        textAlign: 'center'
    },
    caption: {
        textAlign: 'center',
        width: '80%'
    }
}


class CircleEvents extends Component {

    state = {
        modalClicked: false
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

    renderEvents = () => {
        return this.props.events.map(event => {
            return (
            <Carousel.Item className='container'>
                <Link to={`/events/${event.id}`}>
                <img
                  src={event.img_url}
                  alt="event_img"
                  className="image"
                  width="900"
                  height="550"
                />a
                <div className='overlay'>
                    <Carousel.Caption className='text' style={style.caption}>
                    <h1 style={style.head}>{event.name}</h1>
                    <h3 style={style.add}>{event.location}</h3>
                    <p style={style.text}>Time: {event.start_time}<br></br>
                    Price: {event.price}</p>
                    </Carousel.Caption>
                </div>
                </Link>
            </Carousel.Item>
            )
        })
    }
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <h1 style={style.head}>Events</h1>
                </Row>
                <Row xs={12} className="justify-content-md-center">
                    {this.props.events.length > 0 ?
                    <Carousel>
                        {this.renderEvents()}
                    </Carousel>
                    :
                    <Container style={style.container}>
                        <h3>This circle has no events.</h3>
                        <br></br>
                        <Button style={style.button} onClick={this.handleClick}>Add new event</Button>
                        {this.state.modalClicked && <CreateEventForm user={this.props.user} modalClicked={this.state.modalClicked} closeModal={this.closeModal}/>}
                    </Container>
                    }
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.circleShow.unique_events,
        user: state.user
    }
}

export default connect(mapStateToProps)(Radium(CircleEvents));