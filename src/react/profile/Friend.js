import React, { Component } from 'react';
import {Row, ListGroup} from 'react-bootstrap'

const style = {
    image: {
        borderRadius: '50%',
        marginRight: '1em'
    },
    username: {
        marginLeft: '1em'
    }
}

class Friend extends Component {
    friend = Object.values(this.props.friend)[0]
    friendId = Object.keys(this.props.friend)[0]

    render() {
        return (
            <ListGroup.Item>
                <Row>
                    <h4 style={style.username}>{this.friend.username}</h4>
                    <img
                    className='ml-auto'
                    src={this.friend.img_url}
                    width='45'
                    style={style.image}
                    />
                </Row>
            </ListGroup.Item>
        );
    }
}

export default Friend;