import React, { Component } from 'react';
import {Col, Row, Container, Modal, ListGroup, Form} from 'react-bootstrap'
import uuid from 'uuid'
import CircleUser from './CircleUser'
import {connect} from 'react-redux'
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import AddCircleUser from './AddCircleUser'


const style = {
    addButton: {
        width: '3em',
        height: '3em',
        borderRadius: '50%',
        fontSize: '1em',
        lineHeight: '1',
        backgroundColor: 'orange',
        marginRight: '1em',
        border: '1px solid orange',
        boxShadow: '1px 2px 4px grey'
    },
    list: {
        maxHeight: '390px',
        overflow: 'scroll'
    },
    header: {
        marginLeft: '.5em'
    },
    members: {
        maxHeight: '495px',
        minHeight: '450px',
        overflow: 'scroll'
    }
}

class CircleUsers extends Component {

    state = {
        modalClicked: false,
        search: ''
    }
    
    filterAddUsers = () => {
        let current = this.props.users.map(user => user.id)
        let array = this.props.allUsers.filter(f => !current.includes(f.id))
        if(this.state.search.length > 0){
            return array.filter(user => user.name.includes(this.state.search))
        } else {
            return array
        }
    }

    renderAddUsers = () => {
        return this.filterAddUsers().map(user => {
            return<AddCircleUser onClick={this.handleAdd} key={uuid()} user={user} circleId={this.props.circleId}/>
        })
    }

    renderUsers = () => {
        return this.props.users.map(user => {
            return (
                <Col>
                    <CircleUser key={uuid()} user={user}/>
                </Col>
            )
        })
    }

    handleClick = () => {
        this.setState({
            modalClicked: true
        })
    }

    handleAdd = () => {
        this.setState({
            modalClicked: false
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <Container>
                <Row >
                    <h1 style={style.header} className='mr-auto'>Members</h1>
                    <button onClick={this.handleClick} style={style.addButton}><AddCircleOutlineTwoToneIcon/></button>
                </Row>
                <Row xs={12} style={style.members}>
                    {this.renderUsers()}
                </Row>
                <Modal
                    size="md"
                    show={this.state.modalClicked}
                    onHide={() => this.setState({modalClicked: false})}
                    aria-labelledby="example-modal-sizes-title-lg">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                         Add Member to Circle
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
                        <ListGroup style={style.list}>
                            {this.renderAddUsers()}
                        </ListGroup>
                    </Modal.Body>
                </Modal>
            </Container>
            

        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.circleShow.users,
        circleId: state.circleShow.id,
        allUsers: state.allUsers
    }
}

export default connect(mapStateToProps)(CircleUsers);