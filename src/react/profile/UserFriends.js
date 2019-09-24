import React, { Component } from 'react';
import {connect} from 'react-redux'
import Friend from './Friend'
import uuid from 'uuid'
import {Row, Col, ListGroup} from 'react-bootstrap'

const style = {
    row: {
        backgroundColor: '#ced4d9',
        margin: '5em'
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
            <Row style={style.row}>
                <Col xs={6}>
                    <ListGroup>
                        {this.renderFriends()}
                    </ListGroup>
                </Col>
                <Col xs={2}>
                </Col>
                <Col xs={4}>
                    {this.findFriends()}
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendships
    }
}

export default connect(mapStateToProps)(UserFriends);