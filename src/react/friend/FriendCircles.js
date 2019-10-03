import React, { Component } from 'react';
import FriendCircle from './FriendCircle'
import {Col, Row} from 'react-bootstrap'

const style = {
    row: {
        margin: 'auto',
        maxHeight: '90%',
        maxWidth: '90%',
        overflow: 'scroll'
    }
}

class FriendCircles extends Component {

    renderCircles = () => {
        return this.props.circles.map(circle => {
            return <Col><FriendCircle circle={circle}/></Col>
        })
    }

    render() {
        return (
            <Row style={style.row}>
                {this.renderCircles()}
            </Row>
        );
    }
}

export default FriendCircles;