import React, { Component } from 'react';
import {Row, Spinner, Container} from 'react-bootstrap'
import {connect} from 'react-redux'
import {clearFriend} from '../../redux/actions/friendshipActions'
import FriendInfo from './FriendInfo'
import UserCircles from './FriendCircles'
import AddFriend from './AddFriend'

const style = {
    left: {
        border: '1px solid grey'
    },
    div: {
        margin: '2.5em',
    },
    head: {
        backgroundColor: 'grey',
        marginBottom: '1em'
    }
}

class FriendContainer extends Component {
    
    waitForUser = () => {
        if (this.props.friend.name){
            return (
            <div>
                <Row>
                    <FriendInfo user={this.props.friend} clear={this.props.clearFriend}/>
                </Row>
                <hr></hr>
                <Row>
                    <UserCircles circles={this.props.friend.circles} /> 
                </Row>
                <Row>
                    <AddFriend friend={this.props.friend} friendships={this.props.friendships} clear={this.props.clearFriend}/>
                </Row>
            </div>
            )
        } else {
            return <Container><Spinner animation="border" variant="info" /></Container>
        }
    }
    
    render() {
        return (
            <div className='justify-content-md-center' style={style.div}>
                {this.waitForUser()}
            </div>
        )   
    }
}

const mapStateToProps = state => {
    return {
        friendships: state.friendships,
        friend: state.userShow
    }
}

export default connect(mapStateToProps, {clearFriend})(FriendContainer);