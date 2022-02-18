export enum ActionTypes{
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    ADDTICKET = "ADDTICKET"
};

export interface UserState {
    id: number,
    username: string,
    password: string,
    status: string
};

export interface TicketState{
    id: number,
    user_id: number,
    value: number,
    description: string,
    status: string
}

interface LoginAction {
    type: ActionTypes.LOGIN,
    payload: UserState
}

interface LogoutAction {
    type: ActionTypes.LOGOUT
}

interface AddTicketAction {
    type: ActionTypes.ADDTICKET,
    payload: TicketState
}

type Actions = LoginAction | LogoutAction | AddTicketAction;

export default Actions;