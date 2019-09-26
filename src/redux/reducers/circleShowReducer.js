
export default function circleShowReducer(state={}, action){
    switch (action.type){
        case 'CIRCLE_SET':
            return action.circle.circle
        case 'USER_ADDED_TO_CIRCLE':
            return action.circle.circle
        default:
            return state
    }
}