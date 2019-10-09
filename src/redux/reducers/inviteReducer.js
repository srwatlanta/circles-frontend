export default function inviteReducer(state=[], action){
    switch (action.type){
        case 'USER_SET':
            return action.user.invites
        case 'LOGOUT_USER':
            return []
        default:
            return state
    }
}