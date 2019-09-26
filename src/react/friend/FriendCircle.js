import React, { Component } from 'react';
import {Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const style = {
    image: {
        borderRadius: '50%',
        margin: '.5em'
    },
    font: {
        fontSize: '11px'
    }
}

class FriendCircle extends Component {
    render() {
        return (
            <React.Fragment>
                <Row className="justify-content-md-center">
                    <Link to={`/circles/${this.props.circle.id}`}>
                    <img 
                    src={this.props.circle.img_url}
                    width='50'
                    height='50'
                    style={style.image}
                    />
                    </Link>
                </Row>
                <Row className="justify-content-md-center">
                    <p style={style.font}>{this.props.circle.name}</p>
                </Row>
            </React.Fragment>
        );
    }
}

export default FriendCircle;