import {combineReducers} from "redux";
import userReducer from './userReducer';
import ticketReducer from './ticketReducer';

const reducers = combineReducers({
    user: userReducer,
    newTicket: ticketReducer
})

export default reducers;

export type RootState = ReturnType<typeof reducers>;