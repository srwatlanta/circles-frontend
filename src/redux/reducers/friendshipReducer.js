export default function friendshipReducer(state=[], action){
    switch (action.type){
        case 'USER_SET':
                return action.user.find_friendships
        default:
            return state
    }
}