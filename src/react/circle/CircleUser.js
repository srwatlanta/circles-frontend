import React, { Component} from 'react';
import {Row} from 'react-bootstrap'
import {Link} from 'react-browser-router'

const style = {
    image: {
        borderRadius: '50%',
        margin: '2em'
    }
}

class CircleUser extends Component {
    render() {
        return (
            <React.Fragment>
                <Row className="justify-content-md-center">
                    <Link to={`/users/${this.props.user.id}`}>
                    <img 
                    src={this.props.user.img_url}
                    width='125'
                    height='125'
                    style={style.image}
                    />
                    </Link>

                </Row>
                <Row className="justify-content-md-center">
                    <h2>{this.props.user.username}</h2>
                </Row>
            </React.Fragment>
        );
    }
}

export default CircleUser;