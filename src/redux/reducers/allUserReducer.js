export default function allUserReducer(state=[], action){
    switch (action.type){
        case 'FETCH_USERS':
            return action.data
        case 'LOGOUT_USER':
            return []
        default:
            return state
    }
}