import React, { Component } from 'react';
import {connect} from 'react-redux'
import uuid from 'uuid'
import Circle from './Circle'
import {Col, Row} from 'react-bootstrap'
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import CreateCircleForm from './CreateCircleForm';

const style = {
    addButton: {
        width: '70px',
        height: '70px',
        padding: '10px 16px',
        borderRadius: '35px',
        fontSize: '24px',
        lineHeight: '1.33',
        backgroundColor: '#ced4d9',
        marginTop: '1em'
    }
}

class UserCircles extends Component {

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

    renderCircles = () => {
        return this.props.circles.map(circle => {
            return (
                <Col>
                    <Circle key={uuid()} circle={circle}/>
                </Col>
            )
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <Row xs={12} >
                    {this.renderCircles()}
                    <button onClick={this.openModal} type="button" style={style.addButton}><AddCircleOutlineTwoToneIcon fontSize='large'/>
                    </button>

                </Row>
                {this.state.modalClicked && <CreateCircleForm modalClicked={this.state.modalClicked} closeModal={this.closeModal}/>}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        circles: state.circles
    }
}

export default connect(mapStateToProps)(UserCircles);