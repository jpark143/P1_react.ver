import { Dispatch } from "react";
import Actions, {ActionTypes, TicketState, UserState} from "../actions";

export const loginCreator = (user: UserState) => {
    return(dispatch: Dispatch<Actions>) => {
        dispatch({
            type: ActionTypes.LOGIN,
            payload: user
        })
    };
};

export const logoutCreator = () => {
    return(dispatch: Dispatch<Actions>) => {
        dispatch({
            type: ActionTypes.LOGOUT
        })
    };
};

export const addTicketCreator = (ticket: TicketState) => {
    return(dispatch: Dispatch<Actions>) => {
        dispatch({
            type: ActionTypes.ADDTICKET,
            payload: ticket
        })
    };
};