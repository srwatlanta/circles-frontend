import React, { Component } from 'react';
import {connect} from 'react-redux'
import Friend from './Friend'
import uuid from 'uuid'
import {ListGroup, Form} from 'react-bootstrap'
import FriendContainer from '../friend/FriendContainer';
import FindFriend from './FindFriend'
import {clearFriend} from '../../redux/actions/friendshipActions'

const style = {
    header: {
        fontSize: '3em',
        margin: '.5em',
        textAlign: 'center'
    },
    hr: {
        marginLeft: '1em'
    },
    div: {
        minHeight: '100%',
        maxHeight: '100%',
        borderTopRightRadius: '25px',
    },
    list: {
        maxHeight: '80vh',
        overflow: 'auto',
    },
    input: {
        boxShadow: '1px 2px 3px orange'
    }
}


class UserFriends extends Component {

    state = {
        search: ''
    }

    renderFriends = () => {
        if(this.state.search.length > 0){
            let array = this.props.allUsers.filter(user => user.username.includes(this.state.search) || user.name.includes(this.state.search))
            return array.map(user => {
                return <FindFriend key={uuid()} user={user} clear={this.clearSearch}/>
            })
        } else {
            return this.props.friends.map(friend => {
                return <Friend key={uuid()} friend={friend} clear={this.clearSearch}/>
            })        
        }
    }

    handleChange = (event) => {
        this.props.clearFriend()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    clearSearch = () => {
        this.setState({
            search: ''
        })
    }

    render() {
        return (
            <div style={style.div}>
                <h1 style={style.header}><strong>Friends</strong></h1>
                <Form style={style.hr}>
                    <Form.Group controlId="formSearch">
                        <Form.Control 
                            type="search" 
                            placeholder="Find Friends" 
                            name="search" 
                            value={this.state.search} 
                            style={style.input}
                            onChange={(event) => this.handleChange(event)}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                </Form>
                <hr style={style.hr}></hr>
                {this.props.activeFriend.name ?
                <FriendContainer/>
                : 
                <ListGroup style={style.list}>
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
        activeFriend: state.userShow,
        allUsers: state.allUsers
    }
}

export default connect(mapStateToProps, {clearFriend})(UserFriends);