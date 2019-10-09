import React, { Component } from 'react';
import {Row, ListGroup, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {fetchFriend} from '../../redux/actions/friendshipActions'


const style = {
    image: {
        borderRadius: '50%',
        marginRight: '1em',
        marginleft: '1em',
        boxShadow: '1px 2px 3px grey'
    },
    username: {
        margin: 'auto',
        color: 'black'
    },
    row: {
        cursor: 'pointer',
        marginLeft: '1em'
    }
}

class FindFriend extends Component {
    friend = this.props.user

    renderCircles = () => {
        return this.friend.circles.map(circle =>{
            return (
                <img src={circle.img_url} width='45' style={style.image}/>)
        })
    }

    handleClick = () => {
        this.props.fetchFriend(this.friend.id)
        this.props.clear()
    }

    render() {
        return (
            <ListGroup.Item onClick={this.handleClick} style={style.row}>
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


export default connect(null, {fetchFriend})(FindFriend);