import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchEvent} from '../../redux/actions/eventActions'
import { withRouter } from 'react-browser-router';
import {Container, Col, Row} from 'react-bootstrap'
import EventInformation from './EventInformation'
import EventAttendance from './EventAttendance'
import EventComments from './EventComments'

const style = {
    left: {
        border: '1px solid grey'
    },
    div: {
        margin: '50px'
    },
    head: {
        backgroundColor: 'grey',
        marginBottom: '1em'
    }
}

class EventContainer extends Component {

    id = this.props.match.params.id
    
    componentDidMount(){
        this.props.fetchEvent(this.props.history, this.id)
    }
    
    waitForEvent = () => {
        if (this.props.event.name){
            return (
            <div>
                <Row>
                    <Col xs={6}>
                        <EventInformation user={this.props.user} event={this.props.event}/>
                    </Col>
                    <Col xs={3}>
                        <EventComments event={this.props.event} />
                    </Col>
                    <Col xs={3}>
                        <EventAttendance users={this.props.event.users} invites={this.props.event.invites}/>
                    </Col>
                </Row>
            </div>
            )
        } else {
            return <Container></Container>
        }
    }
    
    render() {
        return (
            <div style={style.div}>
                {this.waitForEvent()}
            </div>
        )   
    }
}

const mapStateToProps = state => {
    return {
        event: state.eventShow,
        user: state.user
    }
}

export default connect(mapStateToProps, {fetchEvent} )(withRouter(EventContainer));