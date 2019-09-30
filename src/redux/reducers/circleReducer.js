export default function circleReducer(state=[], action){
    switch (action.type){
        case 'USER_SET':
            return action.user.circles
        case 'LOGOUT_USER':
            return []
        default:
            return state
    }
}