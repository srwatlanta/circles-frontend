export default function userReducer(state={}, action){
    switch (action.type){
        case 'USER_SET':
            return {
                id: action.user.id,
                name: action.user.name,
                username: action.user.username,
                email: action.user.email,
                member_since: action.user.member_since,
                image: action.user.img_url
            }
        default:
            return state
    }
}