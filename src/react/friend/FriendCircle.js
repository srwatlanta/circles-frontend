import React, { Component } from 'react';
import {Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {clearFriend} from '../../redux/actions/friendshipActions'
import {connect} from 'react-redux'

const style = {
    image: {
        borderRadius: '50%',
        margin: '.5em',
        boxShadow: '5px 10px 18px #888888'
    },
    font: {
        fontSize: '11px',
        textAlign: 'center'
    },
}

class FriendCircle extends Component {
    render() {
        return (
            <React.Fragment className="justify-content-md-center">
                <Row className="justify-content-md-center">
                    <Link to={`/circles/${this.props.circle.id}`} onClick={()=>this.props.clearFriend()}>
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

export default connect(null, {clearFriend})(FriendCircle);