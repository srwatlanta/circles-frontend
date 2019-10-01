import React, { Component } from 'react';

const eventfulAPIKEY = '&app_key=nX7Df7js95pkQ5s5'


class UserEvents extends Component {

    componentDidMount(){
        this.fetchEvents()
    }

    fetchEvents = () => {
        fetch('http://api.eventful.com/rest/events/search?l=chicago' + eventfulAPIKEY)
        .then(res=>res.json())
        .then(data => console.log)
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default UserEvents;