import React, { Component} from 'react';
import {Row} from 'react-bootstrap'
import {Link} from 'react-browser-router'
import {connect} from 'react-redux'
import {clearFriend} from '../../redux/actions/friendshipActions'
import Radium from 'radium'

const style = {
    image: {
        borderRadius: '50%',
        margin: '2em',
        border: '20px solid orange',
        ':hover': {
            border: '1px solid grey'
        },
        boxShadow: '5px 10px 18px grey'
    },
    text: {
        color: '#3d4849'
    }
}

class Circle extends Component {
    render() {
        return (
            <React.Fragment>
                <Row className="justify-content-md-center">
                    <Link to={`/circles/${this.props.circle.id}`} onClick={() => this.props.clearFriend()}>
                    <img 
                    src={this.props.circle.img_url}
                    width='300'
                    height='300'
                    style={style.image}
                    />
                    </Link>
                </Row>
                <Row className="justify-content-md-center">
                    <h4 style={style.text}>{this.props.circle.name}</h4>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, {clearFriend})(Radium(Circle));