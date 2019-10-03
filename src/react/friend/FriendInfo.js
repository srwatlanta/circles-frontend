import React, { Component } from 'react';
import {Image} from 'react-bootstrap'

const style= {
    div: {
        margin: 'auto'
    },
    image: {
        boxShadow: '5px 10px 18px #888888',
        marginBottom: '1em',
        borderRadius: '5%'
    }
}

class FriendInfo extends Component {
    render() {
        return (
            <div style={style.div}>
                <Image
                style={style.image}
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