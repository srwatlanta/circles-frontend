import React, { Component } from 'react';
import {connect} from 'react-redux'
import Friend from './Friend'
import uuid from 'uuid'
import {Row, Col, ListGroup} from 'react-bootstrap'

const style = {
    header: {
        margin: '2em'
    }
}


class UserFriends extends Component {
    renderFriends = () => {
        return this.props.friends.map(friend => {
            return <Friend key={uuid()} friend={friend}/>
        })
    }

    findFriends = () => {

    }

    render() {
        return (
            <div>
                <h1 style={style.header}>Friends</h1>
                <ListGroup>
                    {this.renderFriends()}
                </ListGroup>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendships
    }
}

export default connect(mapStateToProps)(UserFriends);