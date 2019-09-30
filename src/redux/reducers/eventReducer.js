export default function eventReducer(state=[], action){
    switch (action.type){
        case 'USER_SET':
            return action.user.events
        case 'LOGOUT_USER':
            return []
        default:
            return state
    }
}