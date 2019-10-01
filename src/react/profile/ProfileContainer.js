import React, { Component } from 'react';
import {connect} from 'react-redux'
import UserCircles from './UserCircles'
import UserFriends from './UserFriends'
import UserInvites from './UserInvites'
import {Col, Row} from 'react-bootstrap'
import UserEvents from './UserEvents';

const style= {
    friends: {
        backgroundColor: '#d6942c'
    },
    main: {
        backgroundColor: '#f8f9fa',
        width: '100%'
    }
}
class ProfileContainer extends Component {

    
    render() {
        return (
            <Row>
                <Col xs={2} style={style.friends}>
                    <UserFriends/>
                </Col>
                <Col xs={10} style={style.main}>
                    <UserCircles/>
                    <UserInvites/>
                    <UserEvents/>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ProfileContainer);