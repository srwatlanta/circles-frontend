import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import ProfileContainer from './react/profile/ProfileContainer'
import {Switch, Route} from 'react-router-dom'
import LoginContainer from './react/login/LoginContainer';
import NavBar from './react/navbar/NavBar'
import {currentUser, fetchAllUsers} from './redux/actions/userActions'
import {withRouter} from 'react-router-dom'
import CircleContainer from './react/circle/CircleContainer'
import EventContainer from './react/event/EventContainer'


class App extends Component {
  componentDidMount(){
      if (localStorage.token === undefined || localStorage.token === 'undefined'){
        return null
      }else{
        this.props.fetchAllUsers()
        this.props.currentUser(this.props.history)
      }
  }
  

  
  render(){
    return (
      <div >
        <NavBar />
        <Switch>
          <Route exact path='/login' component={LoginContainer}/>
          <Route exact path='/profile' component={ProfileContainer}/>
          <Route exact path="/circles/:id" component={CircleContainer} />
          <Route exact path="/events/:id" component={EventContainer} />
        </Switch>
      </div>

    )
  }
}

export default connect(null, {currentUser, fetchAllUsers})(withRouter(App));
