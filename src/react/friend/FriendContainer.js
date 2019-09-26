import React, { Component } from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import {connect} from 'react-redux'
import {clearFriend} from '../../redux/actions/friendshipActions'
import UserInfo from './FriendInfo'
import UserCircles from './FriendCircles'

const style = {
    left: {
        border: '1px solid grey'
    },
    div: {
        margin: '2.5em',
    },
    head: {
        backgroundColor: 'grey',
        marginBottom: '1em'
    }
}

class FriendContainer extends Component {
    
    waitForUser = () => {
        if (this.props.user.name){
            return (
            <div>
                <Row>
                    <UserInfo user={this.props.user} clear={this.props.clearFriend}/>
                </Row>
                <hr></hr>
                <Row>
                    <UserCircles circles={this.props.user.circles} /> 
                </Row>
            </div>
            )
        } else {
            return <Container></Container>
        }
    }
    
    render() {
        return (
            <div className='justify-content-md-center' style={style.div}>
                {this.waitForUser()}
            </div>
        )   
    }
}

const mapStateToProps = state => {
    return {
        user: state.userShow
    }
}

export default connect(mapStateToProps, {clearFriend})(FriendContainer);