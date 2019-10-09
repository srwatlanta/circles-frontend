import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import RemoveIcon from '@material-ui/icons/Remove';
import {addFriend, removeFriend} from '../../redux/actions/friendshipActions'
import {connect} from 'react-redux'


const style= {
    button: {
        width: '30',
        height: '30',
        borderRadius: '35px',
        fontSize: '16px',
        lineHeight: '1.33',
        backgroundColor: '#838487',
        border: '1px solid #838487',
        margin: 'auto'
    },
    addButton :{
        width: '30',
        height: '30',
        borderRadius: '35px',
        fontSize: '16px',
        lineHeight: '1.33',
        backgroundColor: '#00539c',
        border: '1px solid #00539c',
        margin: 'auto'
    }
}

class componentName extends Component {

    renderButton = () =>{
        let x
        x = this.props.friendships.filter(friendship => {
            return Object.values(friendship)[0].id == (this.props.friend.id)
        })
        if(x.length > 0){
            let friendship = Number(Object.keys(x[0])[0])
            return <Button onClick={() => this.removeFriend(friendship)} style={style.button}><RemoveIcon/> Remove Friend</Button>
        }else{
            return <Button onClick={() => this.addFriend(this.props.user.id, this.props.friend.id)} style={style.addButton}><AddCircleOutlineTwoToneIcon/> Add Friend</Button>
        }
    }

    addFriend = (id, friendId) => {
        this.props.addFriend(id, friendId)
    }

    removeFriend = (friendshipId) => {
        this.props.removeFriend(friendshipId)
        this.props.clear()
    }


    render() {
        return (
            <div style={style.button}>
                {this.renderButton()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}




export default connect(mapStateToProps, {addFriend, removeFriend})(componentName);