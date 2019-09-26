export function fetchFriend(id){
    const token = localStorage.token
    const reqObj = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return(dispatch) => {
        dispatch({type: 'LOADING_FRIEND'})
        return fetch(`http://localhost:3000/users/${id}`, reqObj)
        .then(res =>res.json())
        .then(friend => {
            dispatch({type: 'FRIEND_SET', friend})
        })
    }
}

export function clearFriend(){
    return (dispatch) => {
        dispatch({type: 'CLEAR_FRIEND'})
    }
}