import React, { Component } from 'react';
import {Row, ListGroup} from 'react-bootstrap'
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import RemoveIcon from '@material-ui/icons/Remove';



const style = {
    image: {
        borderRadius: '50%',
        marginRight: '1em',
        boxShadow: '1px 2px 3px grey'
    },
    addButton: {
        width: '30',
        height: '30',
        borderRadius: '35px',
        fontSize: '16px',
        backgroundColor: '#00539c',
        marginRight: '1em',
        color: 'white'
    },
    minusButton: {
        width: '30',
        height: '30',
        borderRadius: '35px',
        fontSize: '16px',
        backgroundColor: '#ff6f61',
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