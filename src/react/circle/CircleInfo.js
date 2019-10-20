import React, { Component } from 'react';
import {Container, Row, Modal, Form, Button} from 'react-bootstrap'
import {connect} from 'react-redux'

const style ={
    image: {
        borderRadius: '50%',
        margin: '1em',
        boxShadow: '2px 3px 7px grey'
    },
    container: {
        width: '50%',
        margin: 'auto',
    },
    text: {
        textAlign: 'center'
    },
    addButton: {
        width: '70px',
        height: '70px',
        padding: '10px 16px',
        borderRadius: '35px',
        fontSize: '24px',
        lineHeight: '1.33',
        backgroundColor: 'rgba(0,0,0,0.04)',
        marginTop: '1em',
        marginLeft: '1em',
        boxShadow: '2px 5px 9px grey',
        border: '1px solid rgba(0,0,0,0.04)',
        ':hover': {
            boxShadow: '0 0 10px black'
        }
    },
    ico: {
        color: '#FF6f61',
    }
}

class CircleInfo extends Component {
    state= {
        modalClicked: false
    }

    openModal = () => {
        this.setState({
            modalClicked: true
        })
    }

    closeModal = () => {
        this.setState({
            modalClicked: false
        })
    }

    handleClick = () => {
        this.openModal()
    }

    render() {
        return (
            <Container style={style.container}>
                <Row className="justify-content-md-center">
                <img
                src={this.props.circle.img_url}
                width="200"
                height='200'
                style={style.image}
                />
                <h3 style={style.text}>{this.props.circle.name}</h3>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        circle: state.circleShow
    }
}

export default connect(mapStateToProps)(CircleInfo);