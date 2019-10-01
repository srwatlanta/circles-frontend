import React, { Component } from 'react';
import {Image} from 'react-bootstrap'

const style= {
    div: {
        margin: 'auto'
    }
}

class FriendInfo extends Component {
    render() {
        return (
            <div style={style.div}>
                <Image
                onClick={() => this.props.clear()}
                src={this.props.user.img_url}
                alt={this.props.user.username}
                />
                <h3>{this.props.user.username}</h3>
                <p>
                Name: {this.props.user.name}<br/>
                Member Since: {this.props.user.member_since}</p>
            </div>
        );
    }
}

export default FriendInfo;