export default function eventReducer(state=[], action){
    switch (action.type){
        case 'USER_SET':
                return action.user.events
        default:
            return state
    }
}