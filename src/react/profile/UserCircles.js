import React, { Component } from 'react';
import {connect} from 'react-redux'
import uuid from 'uuid'
import Circle from './Circle'
import {Row} from 'react-bootstrap'
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import CreateCircleForm from './CreateCircleForm';
import Radium from 'radium'

const style = {
    addButton: {
        width: '70px',
        height: '70px',
        padding: '10px 16px',
        borderRadius: '35px',
        fontSize: '24px',
        lineHeight: '1.33',
        backgroundColor: '#ced4d9',
        marginTop: '1em',
        marginLeft: '1em',
        ':hover': {
            boxShadow: '0 0 10px black'
        }
    },
    row: {
        paddingLeft: '1em',
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto'
    },
    col: {
        flex: '0 0 auto',  
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
                <div style={style.col}>
                    <Circle key={uuid()} circle={circle}/>
                </div>
            )
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <Row style={style.row}>
                    <button 
                    onClick={this.openModal} 
                    type="button" 
                    className='ml-auto'
                    style={style.addButton}>
                        <AddCircleOutlineTwoToneIcon fontSize='large'/>
                    </button>
                    {this.renderCircles()}
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

export default connect(mapStateToProps)(Radium(UserCircles));