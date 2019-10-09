
export default function eventShowReducer(state={}, action){
    switch (action.type){
        case 'FRIEND_SET':
            return action.friend.friend
        case 'CLEAR_FRIEND':
            return {}
        case 'LOGOUT_USER':
            return {}
        default:
            return state
    }
}