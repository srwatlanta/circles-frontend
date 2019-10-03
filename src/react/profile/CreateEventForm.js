import React, { Component } from 'react';
import {Form, Button, Modal, ButtonToolbar, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {createEvent} from '../../redux/actions/eventActions'
import FormCircle from './FormCircle'
import uuid from 'uuid'
import {withRouter} from 'react-router-dom'

const style = {
    button: {
        margin: '5px',
        backgroundColor: '#e77d2c',
        border: '1px'
    },
    circles: {
        maxHeight: '155px',
        overflow:'scroll'
    }
}

class CreateEventForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            date: '',
            address: '',
            time: '',
            price: '',
            img_url: '',
            user_id: props.user.id,
            circle_ids: []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createEvent(this.state, this.props.history)
        this.props.closeModal()
    }

    renderCircles = () => {
        return this.props.circles.map(circle => {
            const check = this.check(circle.id)
            return <Col><FormCircle key={uuid()} check={check} add={this.pushId} circle={circle}/></Col>
        })
    }

    check = (id) => {
        return this.state.circle_ids.includes(id)
    }

    pushId = (id) => {
        if(this.state.circle_ids.includes(id)){
            let x = this.state.circle_ids.filter(cId =>{
                return cId !== id
            })
            this.setState({
                circle_ids: x
            })
        }else{
            this.setState({
                circle_ids: [...this.state.circle_ids, id]
            })
        }
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
                        Create Event
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
                                type="date" 
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
                        <Form.Group controlId="formBasicImage">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control 
                                type="text" 
                                onChange={this.handleChange}
                                name="img_url" 
                                value={this.state.img_url} 
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        <hr></hr>
                        <Form.Label>Invite Circles To Event</Form.Label>
                            <Row style={style.circles}>
                                {this.renderCircles()}
                            </Row>
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

const mapStateToProps = state => {
    return {
        circles: state.circles
    }
}

export default connect(mapStateToProps, {createEvent})(withRouter(CreateEventForm));