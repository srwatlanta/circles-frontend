import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Nav,
  Navbar,
  NavDropdown,
  Modal,
  Form,
  ButtonToolbar,
  Button
} from "react-bootstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-browser-router";
import { editUser, logoutUser } from "../../redux/actions/userActions";

const style = {
  image: {
    borderRadius: "50%",
    marginLeft: ".5em",
    marginRight: "1em"
  },
  drop: {
    color: "#515b64",
    width: "100%"
  },
  dropdown: {
    fontSize: "1.1em"
  },
  icon: {
    marginRight: "8px"
  },
  bar: {
    color: "#515b64",
    backgroundColor: "rgba(0,0,0,0.04)",
    padding: "0",
    marginBottom: "1em",
    width: "100vw"
  },
  brand: {
    marginLeft: "1.5em"
  },
  button: {
    backgroundColor: "orange",
    border: "1px solid orange",
    boxShadow: "1px 2px 4px grey"
  }
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalClicked: false,
      username: props.user.username,
      name: props.user.name,
      email: props.user.email,
      img_url: props.user.image
    };
  }

  logoutUser = () => {
    this.props.logoutUser();
  };

  handleClick = () => {
    this.setState({
      modalClicked: true
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.editUser(this.props.user.id, this.state);
    this.setState({
      modalClicked: false
    });
  };

  render() {
    return (
      <Navbar expand="xl" style={style.bar}>
        <Navbar.Brand
          style={style.brand}
          href="https://circles-backend.herokuapp.com/profile"
        >
          <img
            src={require("../../images/circles.svg")}
            width="110"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {this.props.user.username ? (
          <Nav className="ml-auto">
            <Navbar.Collapse
              className="justify-content-end"
              id="responsive-navbar-nav"
            >
              <NavDropdown
                style={style.dropdown}
                drop="left"
                title={this.props.user.username}
              >
                <NavDropdown.Item style={style.drop} href="/profile">
                  <AccountCircleIcon style={style.icon} />
                  Go to Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={this.handleClick} style={style.drop}>
                  <EditIcon style={style.icon} />
                  Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={this.logoutUser}
                  style={style.drop}
                  href="/login"
                >
                  <ExitToAppIcon style={style.icon} />
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/profile">
                <img
                  src={this.props.user.image}
                  width="45"
                  style={style.image}
                />
              </Link>
            </Navbar.Collapse>
          </Nav>
        ) : null}
        <Modal
          size="md"
          show={this.state.modalClicked}
          onHide={() => this.setState({ modalClicked: false })}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Edit Profile
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form style={style.form} onSubmit={this.handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="username"
                  name="username"
                  defaultValue={this.props.user.username}
                  value={this.state.username}
                  onChange={event => this.handleChange(event)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  defaultValue={this.props.user.name}
                  value={this.state.name}
                  onChange={event => this.handleChange(event)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  defaultValue={this.props.user.email}
                  value={this.state.email}
                  onChange={event => this.handleChange(event)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formImage">
                <Form.Label>Image:</Form.Label>
                <Form.Control
                  type="img_url"
                  name="img_url"
                  defaultValue={this.props.user.image}
                  value={this.state.img_url}
                  onChange={event => this.handleChange(event)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <ButtonToolbar className="justify-content-md-center">
                <Button style={style.button} type="submit">
                  Submit
                </Button>
              </ButtonToolbar>
            </Form>
          </Modal.Body>
        </Modal>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { editUser, logoutUser }
)(NavBar);
