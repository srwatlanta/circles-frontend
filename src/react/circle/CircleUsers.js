import React, { Component } from 'react';
import {Col, Row, Container, Modal, ListGroup} from 'react-bootstrap'
import uuid from 'uuid'
import CircleUser from './CircleUser'
import {connect} from 'react-redux'
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import AddCircleUser from './AddCircleUser'


const style = {
    addButton: {
        width: '40px',
        height: '40px',
        borderRadius: '35px',
        fontSize: '16px',
        lineHeight: '1.33',
        backgroundColor: '#ced4d9',
        marginRight: '1em'
    }
}

class CircleUsers extends Component {

    state = {
        modalClicked: false,
        users: []
    }

    fetchAllUsers = () => {
        const token = localStorage.token
        const reqObj = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        fetch('http://localhost:3000/users', reqObj)
        .then(res=> res.json())
        .then(data => this.setState({
            users: data
        }))
    }

    componentDidMount(){
        this.fetchAllUsers()
    }
    
    filterAddUsers = () => {
        let current = this.props.users.map(user => user.id)
        return this.state.users.filter(f => !current.includes(f.id))
    }

    renderAddUsers = () => {
        return this.filterAddUsers().map(user => {
            return<AddCircleUser key={uuid()} user={user} circleId={this.props.circleId}/>
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

    render() {
        return (
            <Container>
                <Row >
                    <h1 className='mr-auto'>MEMBERS</h1>
                    <button onClick={this.handleClick} style={style.addButton}><AddCircleOutlineTwoToneIcon/></button>
                </Row>
                <Row xs={12} >
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
                        <ListGroup>
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
        circleId: state.circleShow.id
    }
}

export default connect(mapStateToProps)(CircleUsers);