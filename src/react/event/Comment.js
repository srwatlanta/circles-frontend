import React, { Component } from 'react';
import {Row, Image, Col, ListGroup} from 'react-bootstrap'

const style = {
    list: {
        paddingTop: '.5em',
        paddingBottom: '.5em'
    },
    image: {
        paddingRight: '1em'
    },
    text: {
        marginTop: '1em'
    },
    username: {
        color: '#d6942c',
        marginRight: '2em'
    }
}

class Comment extends Component {
    render() {
        return (
            <ListGroup.Item style={style.list}>
                <Row xs={12}>
                    <div style={style.image}>
                        <Image
                            src={this.props.comment.proper_user.img_url}
                            width='50'
                        />
                    </div>
                    <div style={style.text}>
                        <span style={style.username}>{this.props.comment.proper_user.username}</span>
                        <span style={style.comment}>{this.props.comment.comment}</span>
                    </div>
                </Row>
            </ListGroup.Item>
        );
    }
}

export default Comment;