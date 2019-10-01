import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchCircle} from '../../redux/actions/circleActions'
import { withRouter } from 'react-browser-router';
import CircleEvents from './CircleEvents'
import CircleUsers from './CircleUsers'
import CircleInfo from './CircleInfo'
import {Container, Col, Row} from 'react-bootstrap'

const style = {
    left: {
        border: '1px solid grey'
    },
    div: {
        margin: '50px'
    },
    head: {
        backgroundColor: 'grey',
        marginBottom: '1em'
    }
}

class CircleContainer extends Component {

    id = this.props.match.params.id
    
    componentDidMount(){
        this.props.fetchCircle(this.props.history, this.id)
    }
    
    waitForCircle = () => {
        if (this.props.circle.name){
            return (
            <div>
                <Row>
                    <Col xs={4} style={style.left}>
                        <Row style={style.head}>
                            <CircleInfo/>
                        </Row>
                        <Row>
                            <CircleUsers/>
                        </Row>
                    </Col>
                    <Col xs={8}>
                        <CircleEvents/>
                    </Col>
                </Row>
            </div>
            )
        } else {
            return <Container></Container>
        }
    }
    
    render() {
        return (
            <div style={style.div}>
                {this.waitForCircle()}
            </div>
        )   
    }
}

const mapStateToProps = state => {
    return {
        circle: state.circleShow
    }
}

export default connect(mapStateToProps, {fetchCircle} )(withRouter(CircleContainer));