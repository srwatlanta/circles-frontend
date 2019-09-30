import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Form, Button, Container, Row, Col, ButtonToolbar} from 'react-bootstrap'
import {loginUser} from '../../redux/actions/userActions'
import CreateAccountModal from './CreateAccountModal';

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

class LoginForm extends Component {

    state = {
        username: '',
        password: '',
        modalClicked: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.loginUser(this.state, this.props.history)
    }

    createAccountClick = () => {
        this.setState({
            modalClicked: true
        })
    }

    closeModal = () => {
        this.setState({
            modalClicked: false
        })
    }

    render() {
        return (
            <Container >
                <Row className="justify-content-md-center">
                    <Col>
                        <img style={style.logo} src={require('../../images/circles2.svg')} alt="logo"></img>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={6} className="block-example border style={style.border}">
                        <Form style={style.form} onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control 
                                    type="username" 
                                    placeholder="Username" 
                                    name="username" 
                                    value={this.state.username} 
                                    onChange={this.handleChange}
                                />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                    name="password" 
                                    value={this.state.password} 
                                />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                            <ButtonToolbar className="justify-content-md-center">
                                <Button style={style.button} type="submit">
                                    Login
                                </Button>
                                <Button style={style.button}>
                                    Forgot Password
                                </Button>
                            </ButtonToolbar>
                            <ButtonToolbar className="justify-content-md-center">
                                <Button style={style.button} onClick={this.createAccountClick}>
                                    Create New Account
                                </Button>
                            </ButtonToolbar>
                        </Form>   
                    </Col>
                </Row>
                {this.state.modalClicked ? <CreateAccountModal history={this.props.history} modalClicked={this.state.modalClicked} closeModal={this.closeModal}/> : null}
            </Container>

        );
    }
}

export default connect(null, {loginUser})(withRouter(LoginForm));