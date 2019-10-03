import React, { Component} from 'react';
import {Row, Image} from 'react-bootstrap'
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';

const style = {
    image: {
        borderRadius: '50%',
        margin: '1em'
    },
    p: {
        fontSize: '11px',
        textAlign: 'center'
    }
}

class FormCircle extends Component {


    handleClick = () => {  
        this.props.add(this.props.circle.id)    
    }
    
    renderCheck = () => {
        return this.props.check && <CheckRoundedIcon/>
    }


    render() {
        return (
            <React.Fragment>
                <Row className="justify-content-md-center">
                    <Image 
                    src={this.props.circle.img_url}
                    width='60'
                    height='60'
                    onClick={this.handleClick}
                    style={style.image}
                    />
                </Row>
                <Row className="justify-content-md-center">
                    <p style={style.p}>{this.props.circle.name}</p>
                </Row>
                <Row className="justify-content-md-center">
                    {this.renderCheck()}
                </Row>
            </React.Fragment>
        );
    }
}

export default FormCircle;