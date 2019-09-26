import React, { Component } from 'react';
import {connect} from 'react-redux'
import Friend from './Friend'
import uuid from 'uuid'
import {ListGroup, Form} from 'react-bootstrap'
import FriendContainer from '../friend/FriendContainer';

const style = {
    header: {
        margin: '1.5em'
    },
    hr: {
        marginLeft: '1em'
    }
}


class UserFriends extends Component {

    state = {
        search: ''
    }
    renderFriends = () => {
        return this.props.friends.map(friend => {
            return <Friend key={uuid()} friend={friend}/>
        })
    }

    render() {
        return (
            <div>
                <h1 style={style.header}>Friends</h1>
                <Form style={style.hr}>
                    <Form.Group controlId="formSearch">
                        <Form.Control 
                            type="search" 
                            placeholder="Find Friends" 
                            name="search" 
                            value={this.state.search} 
                            onChange={(event) => this.handleChange(event)}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                </Form>
                <hr style={style.hr}></hr>
                {this.props.activeFriend.name ?
                <FriendContainer/>
                : 
                <ListGroup>
                    {this.renderFriends()}
                </ListGroup>
                }
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friendships,
        activeFriend: state.userShow
    }
}

export default connect(mapStateToProps)(UserFriends);