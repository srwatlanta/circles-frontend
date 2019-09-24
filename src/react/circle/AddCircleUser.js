import React, { Component } from 'react';
import {Row, ListGroup} from 'react-bootstrap'
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import {addUserToCircle} from '../../redux/actions/circleInviteActions'
import {connect} from 'react-redux'


const style = {
    image: {
        borderRadius: '50%',
        marginRight: '10px'
    },
    addButton: {
        width: '30',
        height: '30',
        borderRadius: '35px',
        fontSize: '16px',
        lineHeight: '1.33',
        backgroundColor: '#ced4d9',
        marginRight: '1em'
    }
}

class AddCircleUser extends Component {

    handleClick = () => {
        this.props.addUserToCircle(this.props.user.id, this.props.circleId)
    }

    render() {
        return (
            <ListGroup.Item >
                <Row>
                    <img
                    src={this.props.user.img_url}
                    alt={this.props.user.username}
                    style={style.image}
                    width='30'
                    />
                    {this.props.user.name}
                    <button className='ml-auto' onClick={this.handleClick} style={style.addButton}><AddCircleOutlineTwoToneIcon/></button>
                </Row>
            </ListGroup.Item>
        );
    }
}

export default connect(null, {addUserToCircle})(AddCircleUser);