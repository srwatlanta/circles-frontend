import React, { Component } from 'react';
import FriendCircle from './FriendCircle'


class FriendCircles extends Component {

    renderCircles = () => {
        return this.props.circles.map(circle => {
            return <FriendCircle circle={circle}/>
        })
    }

    render() {
        return (
            <div>
                {this.renderCircles()}
            </div>
        );
    }
}

export default FriendCircles;