import React, { Component } from 'react';
import {connect} from 'react-redux'
import UserCircles from './UserCircles'
import UserFriends from './UserFriends'
import UserInvites from './UserInvites'
import {Col, Row} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import {currentUser, fetchAllUsers} from '../../redux/actions/userActions'

const style= {
    friends: {
        backgroundColor: '#eee'
    },
    main: {
        backgroundColor: '#f8f9fa',
        height: '100vh'
    }
}
class ProfileContainer extends Component {

    componentDidMount(){
        if (localStorage.token === undefined || localStorage.token === 'undefined'){
            return null
        }else{
            this.props.fetchAllUsers()
            this.props.currentUser(this.props.history)
        }    
    }

    
    render() {
        return (
            <Row>
                <Col xs={2} style={style.friends}>
                    <UserFriends/>
                </Col>
                <Col xs={10} style={style.main}>
                    <UserCircles/>
                    <UserInvites/>
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

export default connect(mapStateToProps, {currentUser, fetchAllUsers})(withRouter(ProfileContainer));