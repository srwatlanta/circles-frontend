import React, { Component } from 'react';
import {connect} from 'react-redux'
import UserCircles from './UserCircles'
import UserFriends from './UserFriends'
import UserInvites from './UserInvites'
import {Container} from 'react-bootstrap'


class ProfileContainer extends Component {


    render() {
        return (
            <Container>
                <UserCircles/>
                <UserInvites/>
                <UserFriends/>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ProfileContainer);