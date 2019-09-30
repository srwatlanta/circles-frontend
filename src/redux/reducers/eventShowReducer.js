
export default function eventShowReducer(state={}, action){
    switch (action.type){
        case 'EVENT_SET':
            return action.event.event
        case 'LOGOUT_USER':
            return {}
        default:
            return state
    }
}