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
            // history.push('/profile')
        })
        .catch(error => alert('Please Provide Valid Credentials'))
        // history.push('/login')
    }
}

export function loginUser(data, history){
    return(dispatch) => {
        dispatch({type: 'SENDING_LOGIN_INFO'})
        console.log(data)
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
        .catch(error => alert('Please Provide Valid Credentials'))
        history.push('/login')

    }
}

export function fetchAllUsers() {
    const token = localStorage.token
    const reqObj = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return(dispatch) => {
        dispatch({type: "FETCHING_USERS"})
        return fetch('http://localhost:3000/users', reqObj)
        .then(res=> res.json())
        .then(data => {
            dispatch({type: 'FETCH_USERS', data})
        })
    }
}

export function editUser(id, data){
    const token = localStorage.token
    const reqObj = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            user: {
                username: data.username,
                name: data.name,
                email: data.email,
                img_url: data.img_url
            }
        })
    }
    return(dispatch) => {
        dispatch({type: 'SENDING_EDIT_INFO'})
        return fetch(`http://localhost:3000/users/${id}`, reqObj)
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'USER_SET', user: data.user})
        })
    }

}

export function createUser(user, history){
    const reqObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json',
        },
        body: JSON.stringify({
            user: {
                username: user.username,
                password: user.password,
                name: user.name,
                email: user.email,
                img_url: user.img_url
            }
        })
    }
    return(dispatch) => {
        dispatch({type: 'SENDING_EDIT_INFO'})
        return fetch('http://localhost:3000/users', reqObj)
        .then(res => res.json())
        .then(data => {
            localStorage.token = data.jwt
            dispatch({type: 'USER_SET', user: data.user})
            history.push('/profile')
        })
        .catch(error => alert('Please Provide Valid Credentials'))
        history.push('/login')
        .then(fetchAllUsers())
    }
}

export function logoutUser(dispatch){
    localStorage.clear()
    return dispatch({type: 'logoutUser'})
}