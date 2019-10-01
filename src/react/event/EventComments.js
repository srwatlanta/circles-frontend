import React, { Component } from 'react';
import {Container, Form, Button, ListGroup, Row} from 'react-bootstrap';
import Comment from './Comment'
import {createComment} from '../../redux/actions/eventActions'
import {connect} from 'react-redux'

const style = {
    input: {
        marginBottom: '1em',
        padding: '.5em',
        border: '1px solid grey'
    },
    button: {
        backgroundColor: '#d6942c',
        border: '1px solid grey'
    },
    container: {
        marginLeft: '1em'
    }
}

class EventComments extends Component {

    state = {
        comment: ''
    }

    renderComments = () => {
        return this.props.event.comments.map(comment => {
            return <Comment comment={comment} />
        })   
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }) 
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createComment(this.state.comment, this.props.user.id, this.props.event.id)
    }

    render() {
        return (
            <React.Fragment style={style.container}>
                <ListGroup>
                    {this.renderComments()}
                </ListGroup>
                <hr></hr>
                <div style={style.input}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Leave A Comment</Form.Label>
                            <Form.Control
                                value={this.state.comment}
                                name='comment'
                                type='text'
                                onChange={this.handleChange}
                            />
                            <Form.Text></Form.Text>
                        </Form.Group>
                        <Button style={style.button} type='Submit'>Submit</Button>
                    </Form>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {createComment})(EventComments);