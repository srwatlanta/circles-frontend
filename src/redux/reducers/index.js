import {combineReducers} from 'redux'
import circleInviteReducer from './circleInviteReducer'
import userReducer from './userReducer'
import eventReducer from './eventReducer'
import circleReducer from './circleReducer'
import friendshipReducer from './friendshipReducer'
import inviteReducer from './inviteReducer'
import circleShowReducer from './circleShowReducer'
import eventShowReducer from './eventShowReducer'
import userShowReducer from './userShowReducer'

const rootReducer = combineReducers({
    user: userReducer,
    events: eventReducer,
    circles: circleReducer,
    friendships: friendshipReducer,
    invites: inviteReducer,
    circleInvites: circleInviteReducer,
    circleShow: circleShowReducer,
    eventShow: eventShowReducer,
    userShow: userShowReducer
})

export default rootReducer