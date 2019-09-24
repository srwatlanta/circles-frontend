import React, { Component } from 'react';
import LoginForm from './LoginForm'
import { Container } from 'react-bootstrap';

const style = {
    form: {
        marginTop: '10%'
    }
}

class LoginContainer extends Component {
    render() {
        return (
            <Container  style={style.form}>
                <LoginForm />
            </Container>
        );
    }
}

export default LoginContainer;