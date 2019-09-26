import React, { Component } from 'react';
import {Modal, Form, Button, ButtonToolbar} from 'react-bootstrap'
import NewCircleAddUser from './NewCircleAddUser'
import uuid from 'uuid'
import {connect} from 'react-redux'
import {newCircleFetch} from '../../redux/actions/circleActions'
import {withRouter} from 'react-router-dom'

const style = {
    button: {
        margin: '5px',
        backgroundColor: '#e77d2c',
        border: '1px'
    },
    form: {
        paddingTop: '20px',
    },
    border: {
        backgroundColor: '#515b64'
    },
    logo: {
        marginLeft: '25%',
        width: '15%'
    }
}
 
class CreateCircleForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            img_url: '',
            userIds: [this.props.user.id],
            search: '',
            users: [],
        }
    }


    fetchAllUsers = () => {
        const token = localStorage.token
        const reqObj = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        fetch('http://localhost:3000/users', reqObj)
        .then(res=> res.json())
        .then(data => this.setState({
            users: data
        }))
    }

    componentDidMount(){
        this.fetchAllUsers()
    }

    filterUsers = () => {
        let array = this.state.users.filter(user => user.id !== this.props.user.id)
        if(this.state.search.length > 0){
            return array.filter(user => user.name.includes(this.state.search))
        } else {
            return array
        }
    }

    renderAddUsers = () => {
        return this.filterUsers().map(user => {
            return<NewCircleAddUser ids={this.state.userIds} handleMinusClick={this.subtractUserClick} handleAddClick={this.addUserClick} key={uuid()} user={user}/>
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.newCircleFetch(this.state, this.props.history)
        this.props.closeModal()
    }

    addUserClick = (id) => {
        this.setState({
            userIds: [...this.state.userIds, id]
        })
    }

    subtractUserClick = (id) => {
        let array = this.state.userIds.filter(user => user != id)
        this.setState({
            userIds: array
        })
    }

    render() {
        return (
            <Modal
                size="md"
                show={this.props.modalClicked}
                onHide={() => this.props.closeModal()}
                aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Create New Circle
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form style={style.form} onSubmit={(event) => this.handleSubmit(event)}>
                        <Form.Group controlId="formBasicCircleName">
                            <Form.Label>Circle Name</Form.Label>
                            <Form.Control 
                                type="name" 
                                placeholder="Circle Name" 
                                name="name" 
                                value={this.state.name} 
                                onChange={this.handleChange}
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicImage">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control 
                                type="img_url" 
                                placeholder="Image URL"
                                onChange={this.handleChange}
                                name="img_url" 
                                value={this.state.img_url} 
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        <hr></hr>
                        <Form.Group controlId="formSearch">
                        <Form.Label>Add Friends to Circle</Form.Label>
                            <Form.Control 
                                type="search" 
                                placeholder="Search" 
                                name="search" 
                                value={this.state.search} 
                                onChange={(event) => this.handleChange(event)}
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        <Form.Group>
                            {this.renderAddUsers()}
                        </Form.Group>
                        <ButtonToolbar className="justify-content-md-center">
                            <Button style={style.button} type="submit">
                                Submit
                            </Button>
                        </ButtonToolbar>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {newCircleFetch})(withRouter(CreateCircleForm));