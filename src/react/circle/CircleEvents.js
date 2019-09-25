import React, { Component } from 'react';
import {Row, Carousel, Container} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-browser-router'


const style = {
    addButton: {
        width: '70px',
        height: '70px',
        padding: '10px 16px',
        borderRadius: '35px',
        fontSize: '24px',
        lineHeight: '1.33',
        backgroundColor: '#ced4d9',
        marginTop: '1em'
    },
    image: {
        borderRadius: '50%',
        margin: '2em'
    }
}


class CircleEvents extends Component {

    renderEvents = () => {
        return this.props.events.map(event => {
            return (
            <Carousel.Item>
                <Link to={`/events/${event.id}`}>
                <img
                  src={event.img_url}
                  alt="event_img"
                  style={style.image}
                  width="900"
                />
                <Carousel.Caption>
                  <h3>{event.name}</h3>
                  <p>{event.location}</p>
                  <p>{event.start_time}</p>
                  <p>{event.price}</p>
                </Carousel.Caption>
                </Link>
            </Carousel.Item>
            )
        })
    }
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <h1>EVENTS</h1>
                </Row>
                <Row xs={12} className="justify-content-md-center">
                    <Carousel>
                        {this.renderEvents()}
                    </Carousel>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.circleShow.unique_events
    }
}

export default connect(mapStateToProps)(CircleEvents);