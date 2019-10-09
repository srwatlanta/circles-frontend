export function addUserToCircle(userId, circleId){
    const token = localStorage.token
    const reqObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accepts' : 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            circle_invite: {
                user_id: userId,
                circle_id: circleId
            }
        })
    }
    return(dispatch) => {
        dispatch({type: 'ADD_USER_TO_CIRCLE'})
        return fetch('http://localhost:3000/circle_invites', reqObj)
        .then(res =>res.json())
        .then(circle => {
            dispatch({type: 'USER_ADDED_TO_CIRCLE', circle})
        })
    }
}