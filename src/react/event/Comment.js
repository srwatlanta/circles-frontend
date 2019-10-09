import React, { Component } from 'react';
import {Row, Image, Col, ListGroup} from 'react-bootstrap'

const style = {
    list: {
        paddingTop: '.5em',
        paddingBottom: '.5em'
    },
    image: {
        paddingRight: '1em',
        borderRadius: '20%',
    },
    text: {
        marginTop: '.6em',
        justifyContent: 'flex-end',
    },
    username: {
        color: 'orange',
        fontWeight: '600'
    },
    pic: {
        borderRadius: '5%',
        boxShadow: '1px 2px 3px grey',
        marginRight: '1em'
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
                            style={style.pic}
                        />
                        <span style={style.username}>{this.props.comment.proper_user.username}</span>
                    </div>
                    <div style={style.text}>
                        <p>{this.props.comment.comment}</p>
                    </div>
                </Row>
            </ListGroup.Item>
        );
    }
}

export default Comment;