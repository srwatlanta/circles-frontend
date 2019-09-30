export default function friendshipReducer(state=[], action){
    switch (action.type){
        case 'USER_SET':
                return action.user.find_friendships
        case 'LOGOUT_USER':
            return []
        default:
            return state
    }
}