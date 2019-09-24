import React, { Component } from 'react';
import {Row, ListGroup} from 'react-bootstrap'
import Invite from './Invite'
import uuid from 'uuid'
import {connect} from 'react-redux'

const style = {
    section: {
        margin: '4em'
    }
}

class UserInvites extends Component {

    renderInvites = () => {
        return this.props.invites.map(invite => {
            return(<Invite key={uuid()} invite={invite}/>)
        })
    }

    render() {
        return (
            <Row className="justify-content-md-center" style={style.section}>
                    <ListGroup >
                        <h1>Invites</h1>
                        {this.renderInvites()}
                    </ListGroup>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    return {
        invites: state.invites
    }
}

export default connect(mapStateToProps)(UserInvites);