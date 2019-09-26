
export default function eventShowReducer(state={}, action){
    switch (action.type){
        case 'FRIEND_SET':
            return action.friend.friend
        case 'CLEAR_FRIEND':
            return {}
        default:
            return state
    }
}