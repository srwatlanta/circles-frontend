export default function circleInviteReducer(state=[], action){
    switch (action.type){
        case 'USER_SET':
            return action.user.circle_invites
        case 'LOGOUT_USER':
                    return []
        default:
            return state
    }
}