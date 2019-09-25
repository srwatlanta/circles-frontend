import React, { Component } from 'react';
import {Row, ListGroup} from 'react-bootstrap'
import {Link} from 'react-browser-router'


const style = {
    image: {
        borderRadius: '50%',
        marginRight: '1em',
        marginleft: '1em'
    },
    username: {
        margin: 'auto',
        color: 'black'
    }
}

class Friend extends Component {
    friend = Object.values(this.props.friend)[0]
    friendId = Object.keys(this.props.friend)[0]

    renderCircles = () => {
        return this.friend.circles.map(circle =>{
            return (
                <img src={circle.img_url} width='45' style={style.image}/>)
        })
    }

    render() {
        return (
            <ListGroup.Item>
                <Link to={`/users/${this.friend.id}`}>
                <Row>
                    <h4 style={style.username}>{this.friend.username}</h4>
                    <img
                    className='ml-auto'
                    src={this.friend.img_url}
                    width='45'
                    style={style.image}
                    />
                </Row>
                </Link>                       
            </ListGroup.Item>
        );
    }
}

export default Friend;