import React, { Component} from 'react';
import {Row, Image} from 'react-bootstrap'

const style = {
    image: {
        borderRadius: '50%',
        margin: '2em'
    }
}

class CircleUser extends Component {
    state = {
        friendClicked: false
    }
    render() {
        return (
            <React.Fragment>
                <Row className="justify-content-md-center">
                    <Image 
                    src={this.props.user.img_url}
                    width='125'
                    height='125'
                    style={style.image}
                    />
                </Row>
                <Row className="justify-content-md-center">
                    <h2>{this.props.user.username}</h2>
                </Row>
            </React.Fragment>
        );
    }
}

export default CircleUser;