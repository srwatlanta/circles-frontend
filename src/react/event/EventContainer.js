import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchEvent} from '../../redux/actions/eventActions'
import { withRouter } from 'react-browser-router';
import {Container, Col, Row} from 'react-bootstrap'
import EventInformation from './EventInformation'
import EventAttendance from './EventAttendance'
import EditEventForm from './EditEventForm'
import EventComments from './EventComments'

const style = {
    left: {
        border: '1px solid grey'
    },
    div: {
        margin: '100px'
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
                    <Col xs={8}>
                        <EventInformation event={this.props.event}/>
                        <EventComments comments={this.props.event.comments} />
                    </Col>
                    <Col xs={4}>
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
        event: state.eventShow
    }
}

export default connect(mapStateToProps, {fetchEvent} )(withRouter(EventContainer));