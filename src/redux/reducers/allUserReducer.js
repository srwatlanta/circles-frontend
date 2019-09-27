export default function allUserReducer(state=[], action){
    switch (action.type){
        case 'FETCH_USERS':
            return action.data
        default:
            return state
    }
}