import React, { Component } from 'react';
import {Row, ListGroup, Button, Modal, Form} from 'react-bootstrap'
import Invite from './Invite'
import uuid from 'uuid'
import {connect} from 'react-redux'

const style = {
    section: {
        margin: '4em'
    },
    button: {
        backgroundColor: '#d6942c',
        borderColor: '#d6942c'
    }
}

class UserInvites extends Component {

    state = {
        modalClicked: false
    }

    renderInvites = () => {
        return this.props.invites.length > 0 ?
        this.props.invites.map(invite => {
            return(<Invite key={uuid()} invite={invite}/>)
        })
        :
        <h1>Join a Circle or Create an Event!</h1>
    }

    handleClick = () => {
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
            <Row className="justify-content-md-center" style={style.section}>
                    <ListGroup >
                        {this.props.invites.length > 0 ? <h1>Invites</h1> : null}
                        {this.renderInvites()}
                        <Button onClick={this.handleClick} style={style.button}>Create New Event</Button> 
                    </ListGroup>
                    <Modal
                    size="md"
                    show={this.state.modalClicked}
                    onHide={() => this.setState({modalClicked: false})}
                    aria-labelledby="example-modal-sizes-title-lg">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                         Create New Event
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form style={style.form}>
                            <Form.Group controlId="formSearch">
                                <Form.Control 
                                    type="search" 
                                    placeholder="Search" 
                                    name="search" 
                                    value={this.state.search} 
                                    onChange={(event) => this.handleChange(event)}
                                />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                        </Form>
                        <ListGroup>
                        </ListGroup>
                    </Modal.Body>
                </Modal>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    return {
        invites: state.invites
    }
}

export default connect(mapStateToProps)(UserInvites);