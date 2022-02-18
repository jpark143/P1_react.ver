import Actions, { ActionTypes, TicketState } from "../actions";

const initialState: TicketState = {
    id: 0,
    user_id: 0,
    value: 0,
    description: "",
    status: ""
};

const ticketReducer = (state: TicketState = initialState, action: Actions): TicketState => {
    switch(action.type){
        case ActionTypes.ADDTICKET:
            console.log("Add ticket");
            return action.payload;
        default:
            return state;
    }
};

export default ticketReducer;