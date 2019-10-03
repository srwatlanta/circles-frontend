import React, { Component } from 'react';
import {Form, Modal, Button, ButtonToolbar} from 'react-bootstrap'
import {createUser} from '../../redux/actions/userActions'
import {connect} from 'react-redux'

const style = {
    button: {
        margin: '5px',
        backgroundColor: 'orange',
        border: '1px',
        boxShadow: '1px 2px 4px grey'
    }
}

class CreateAccountModal extends Component {

    state = {
        username: '',
        password: '',
        name: '',
        email: '',
        img_url: ''

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createUser(this.state, this.props.history)
        this.props.closeModal()
    }

    render() {
        return (
            <Modal
                size="md"
                show={this.props.modalClicked}
                onHide={() => this.props.closeModal()}
                aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton stlye={style.head}>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Edit Profile
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form style={style.form} onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control 
                                type="username" 
                                name="username"
                                value={this.state.username} 
                                onChange={(event) => this.handleChange(event)}
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control 
                                type="password" 
                                name="password"
                                value={this.state.password} 
                                onChange={(event) => this.handleChange(event)}
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control 
                                type="name" 
                                name="name" 
                                value={this.state.name} 
                                onChange={(event) => this.handleChange(event)}
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control 
                                type="email" 
                                name="email"
                                value={this.state.email} 
                                onChange={(event) => this.handleChange(event)}
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formImage">
                            <Form.Label>Image:</Form.Label>
                            <Form.Control 
                                type="img_url" 
                                name="img_url"
                                value={this.state.img_url} 
                                onChange={(event) => this.handleChange(event)}
                            />
                            <Form.Text className="text-muted"></Form.Text>
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

export default connect(null, {createUser})(CreateAccountModal);