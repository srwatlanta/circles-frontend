import React, { Component } from 'react';
import {Container, Form, Button, ListGroup, Row} from 'react-bootstrap';
import Comment from './Comment'
import {createComment} from '../../redux/actions/eventActions'
import {connect} from 'react-redux'

const style = {
    input: {
        marginBottom: '1em',
        padding: '.5em',
        border: '1px solid grey',
        borderRadius: '2%',
        boxShadow: '1px 2px 4px grey'
    },
    button: {
        backgroundColor: 'orange',
        border: '1px solid orange',
        boxShadow: '1px 2px 4px grey'
    },
    container: {
        marginLeft: '1em'
    },
    text: {
        boxShadow: '1px 2px 4px grey'
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
        this.setState({
            comment: ''
        })
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
                            <Form.Label>Leave a comment</Form.Label>
                            <Form.Control
                                value={this.state.comment}
                                name='comment'
                                type='text'
                                onChange={this.handleChange}
                                style={style.text}
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