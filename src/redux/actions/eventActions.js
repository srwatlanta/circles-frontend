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