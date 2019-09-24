export function currentUser(history){
    const token = localStorage.token
    const reqObj = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return(dispatch) => {
        dispatch({type: 'LOADING_USER'})
        return fetch('http://localhost:3000/profile', reqObj)
        .then(res =>res.json())
        .then(user => {
            dispatch({type: 'USER_SET', user: user.user})
        })
    }
}

export function loginUser(data, history){
    return(dispatch) => {
        dispatch({type: 'SENDING_LOGIN_INFO'})
        return fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({
                login: {
                    username: data.username,
                    password: data.password
                }
            })
        })
        .then(res => res.json())
        .then(data => {
            localStorage.token = data.jwt
            dispatch({type: 'USER_SET', user: data.user})
            history.push('/profile')
        })
    }
}

