export function fetchEvent(history, id){
    const token = localStorage.token
    const reqObj = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return(dispatch) => {
        dispatch({type: 'LOADING_EVENT'})
        return fetch(`http://localhost:3000/events/${id}`, reqObj)
        .then(res =>res.json())
        .then(event => {
            dispatch({type: 'EVENT_SET', event})
            history.push(`/events/${id}`)
        })
    }
}
export function editEvent(id, data){
    const token = localStorage.token
    const patchObj = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            event: {
                name: data.name,
                location: data.address,
                date: data.date,
                start_time: data.time,
                price: data.price,
            }
        })
    }
    return(dispatch) => {
        dispatch({type: 'EDITING_EVENT'})
        return fetch(`http://localhost:3000/events/${id}`, patchObj)
        .then(res =>res.json())
        .then(event => {
            dispatch({type: 'EVENT_SET', event})
        })
    }
}

export function createEvent(data, history){
    const token = localStorage.token
    const reqObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            event: {
                name: data.name,
                location: data.address,
                date: data.date,
                start_time: data.time,
                price: data.price,
                user_id: data.user_id,
                img_url: data.img_url,
                circle_ids: data.circle_ids
            }
        })
    }
    return(dispatch) => {
        dispatch({type: 'CREATING_EVENT'})
        return fetch('http://localhost:3000/events', reqObj)
        .then(res =>res.json())
        .then(event => {
            dispatch({type: 'EVENT_SET', event})
            history.push(`/events/${event.event.id}`)
        })
    }
}

export function createComment(comment, userId, eventId) {
    const token = localStorage.token
    const reqObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            comment: {
                comment: comment,
                user_id: userId,
                event_id: eventId
            }
        })
    }
    return(dispatch) => {
        dispatch({type: 'CREATING_COMMENT'})
        return fetch('http://localhost:3000/comments', reqObj)
        .then(res => res.json())
        .then(event => {
            dispatch({type: 'EVENT_SET', event})
        })
    }
}