export default function circleReducer(state=[], action){
    switch (action.type){
        case 'USER_SET':
            return action.user.circles
        default:
            return state
    }
}