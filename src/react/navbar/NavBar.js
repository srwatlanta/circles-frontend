import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from 'react-browser-router'


const style = {
    image: {
        borderRadius: '50%',
        marginLeft: '4px'
    },
    drop: {
        color: '#515b64'
    },
    icon: {
        marginRight: '8px'
    }
}

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" style={style.drop}>
                <Navbar.Brand href='http://localhost:3001/about'>
                    <img
                        src={require("../../images/circles.svg")}
                        width='110'
                        className='d-inline-block align-top'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav className='ml-auto'>
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <NavDropdown title={this.props.user.username} >
                            <NavDropdown.Item style={style.drop} href="/profile"><AccountCircleIcon style={style.icon}/>Go To Profile</NavDropdown.Item>
                            <NavDropdown.Item style={style.drop} href="#action/3.2"><EditIcon style={style.icon}/>Edit Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item style={style.drop} href="#action/3.4"><ExitToAppIcon style={style.icon}/>Logout</NavDropdown.Item>
                        </NavDropdown>
                        <Link to= '/profile'>
                        <img
                            src={this.props.user.image}
                            width="45"
                            style={style.image}
                        />
                        </Link>
                    </Navbar.Collapse>
                </Nav>
            </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(NavBar);