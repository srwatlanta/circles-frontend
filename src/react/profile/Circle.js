import React, { Component} from 'react';
import {Row} from 'react-bootstrap'
import {Link} from 'react-browser-router'
import {connect} from 'react-redux'
import {clearFriend} from '../../redux/actions/friendshipActions'

const style = {
    image: {
        borderRadius: '50%',
        margin: '2em'
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
                    width='350'
                    height='350'
                    style={style.image}
                    />
                    </Link>

                </Row>
                <Row className="justify-content-md-center">
                    <h2>{this.props.circle.name}</h2>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, {clearFriend})(Circle);