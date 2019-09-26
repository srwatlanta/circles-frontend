import React, { Component } from 'react';
import {Row, ListGroup} from 'react-bootstrap'
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import RemoveIcon from '@material-ui/icons/Remove';



const style = {
    image: {
        borderRadius: '50%',
        marginRight: '1em'
    },
    addButton: {
        width: '30',
        height: '30',
        borderRadius: '35px',
        fontSize: '16px',
        lineHeight: '1.33',
        backgroundColor: 'green',
        marginRight: '1em'
    },
    minusButton: {
        width: '30',
        height: '30',
        borderRadius: '35px',
        fontSize: '16px',
        lineHeight: '1.33',
        backgroundColor: 'red',
        marginRight: '1em'
    }
}

class NewCircleAddUser extends Component {
    state = {
        clicked: false
    }

    renderButton = () => {
        return this.props.ids.includes(this.props.user.id) ?
        <button className='ml-auto' onClick={() => this.handleMinusClick()} style={style.minusButton}><RemoveIcon/></button>
        :
        <button className='ml-auto' onClick={() =>this.handleAddClick()} style={style.addButton}><AddCircleOutlineTwoToneIcon/></button>
    }


    handleAddClick = () => {
        this.props.handleAddClick(this.props.user.id)
    }

    handleMinusClick = () => {
        this.props.handleMinusClick(this.props.user.id)
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
                    {this.renderButton()}             
                </Row>
            </ListGroup.Item>
        );
    }
}

export default NewCircleAddUser;