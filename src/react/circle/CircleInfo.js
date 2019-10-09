import React, { Component } from 'react';
import {Container, Row} from 'react-bootstrap'
import {connect} from 'react-redux'

const style ={
    image: {
        borderRadius: '50%',
        margin: '1em',
        boxShadow: '2px 3px 7px grey'
    },
    container: {
        width: '50%',
        margin: 'auto',
    },
    text: {
        textAlign: 'center'
    }
}

class CircleInfo extends Component {
    render() {
        return (
            <Container style={style.container}>
                <Row className="justify-content-md-center">
                <img
                src={this.props.circle.img_url}
                width="200"
                height='200'
                style={style.image}
                />
                <h3 style={style.text}>{this.props.circle.name}</h3>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        circle: state.circleShow
    }
}

export default connect(mapStateToProps)(CircleInfo);