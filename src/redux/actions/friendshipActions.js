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

export function addFriend(id, friendId){
    console.log(id, friendId)
    const token = localStorage.token
    const reqObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            friendship: {
                user_id: id,
                friend_id: friendId
            }
        })
    }
    return(dispatch) => {
        dispatch({type: 'ADDING_FRIEND'})
        return fetch('http://localhost:3000/friendships', reqObj)
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            dispatch({type: 'USER_SET', user: data.user})
        })
    }
}

export function removeFriend(id){
    const token = localStorage.token
    const reqObj = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return(dispatch) => {
        dispatch({type: 'REMOVING_FRIEND', id})
        return fetch(`http://localhost:3000/friendships/${id}`, reqObj)
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            dispatch({type: 'USER_SET', user: data.user})
        })
    }
}