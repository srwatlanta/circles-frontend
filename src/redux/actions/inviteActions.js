export function updateInviteStatus(id, statusUpdate){
    const token = localStorage.token
    const reqObj = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            invite: {
                status: statusUpdate
            }
        })
    }
    return(dispatch) => {
        dispatch({type: 'UPDATING_INVITE'})
        return fetch(`http://localhost:3000/invites/${id}`, reqObj)
        .then(res =>res.json())
        .then(user => {
            dispatch({type: 'USER_SET', user: user.user})
        })
    }
}
