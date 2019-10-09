import React, { Component} from 'react';
import {Row, Image} from 'react-bootstrap'
import Radium from 'radium'

const style = {
    image: {
        borderRadius: '50%',
        margin: '1em',
        border: '7px solid orange',
        ':hover': {
            border: '1px solid grey'
        },
        boxShadow: '1px 2px 4px grey'
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
                    <h4>{this.props.user.username}</h4>
                </Row>
            </React.Fragment>
        );
    }
}

export default Radium(CircleUser);