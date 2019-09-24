export function fetchCircle(history, id){
    const token = localStorage.token
    const reqObj = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return(dispatch) => {
        dispatch({type: 'LOADING_CIRCLE'})
        return fetch(`http://localhost:3000/circles/${id}`, reqObj)
        .then(res =>res.json())
        .then(circle => {
            dispatch({type: 'CIRCLE_SET', circle})
            history.push(`/circles/${id}`)
        })
    }
}