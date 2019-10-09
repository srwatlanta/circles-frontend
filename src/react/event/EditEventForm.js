import React, { Component } from 'react';
import {Form, Button, Modal, ButtonToolbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import {editEvent} from '../../redux/actions/eventActions'

const style = {
    button: {
        margin: '5px',
        backgroundColor: '#e77d2c',
        border: '1px'
    }
}

class EditEventForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.event.name,
            date: props.event.date,
            address: props.event.location,
            time: props.event.start_time,
            price: props.event.price
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.editEvent(this.props.event.id, this.state)
        this.props.closeModal()
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
                        Edit Event
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form style={style.form} onSubmit={(event) => this.handleSubmit(event)}>
                        <Form.Group controlId="formBasicEventName">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control 
                                type="name" 
                                name="name" 
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control 
                                type="address" 
                                onChange={this.handleChange}
                                name="address" 
                                value={this.state.address} 
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEventDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="date" 
                                value={this.state.date}
                                onChange={this.handleChange}
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicTime">
                            <Form.Label>Time</Form.Label>
                            <Form.Control 
                                type="time" 
                                onChange={this.handleChange}
                                name="time" 
                                value={this.state.time} 
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicTime">
                            <Form.Label>Price</Form.Label>
                            <Form.Control 
                                type="text" 
                                onChange={this.handleChange}
                                name="price" 
                                value={this.state.price} 
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        
                        <Form.Group >
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

export default connect(null, {editEvent})(EditEventForm);