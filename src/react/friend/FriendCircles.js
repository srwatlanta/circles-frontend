import React, { Component } from 'react';
import FriendCircle from './FriendCircle'
import {Col, Row} from 'react-bootstrap'

class FriendCircles extends Component {

    renderCircles = () => {
        return this.props.circles.map(circle => {
            return <Col><FriendCircle circle={circle}/></Col>
        })
    }

    render() {
        return (
            <Row>
                {this.renderCircles()}
            </Row>
        );
    }
}

export default FriendCircles;