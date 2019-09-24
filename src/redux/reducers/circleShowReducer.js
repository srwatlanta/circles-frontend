
export default function circleShowReducer(state={}, action){
    switch (action.type){
        case 'CIRCLE_SET':
        return action.circle.circle
        default:
            return state
    }
}