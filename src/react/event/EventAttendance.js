import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import EventAttendanceCard from './EventAttendanceCard'

class EventAttendance extends Component {

    findUser = (id) => {
        return this.props.users.filter(f => f.id === id)
    }

    renderUsers = () => {
        return this.props.invites.map(invite => {
            let user = this.findUser(invite.user_id)[0]
            return <EventAttendanceCard user={user} status={invite.status}/>
        })
    }


    render() {
        return (
            <Container>
                <Row>
                    {this.renderUsers()}
                </Row>
            </Container>
        );
    }
}

export default EventAttendance;