import Actions, { ActionTypes, UserState } from "../actions";

const initialState: UserState = {
    id: 0,
    username: "",
    password: "",
    status: ""
};

const userReducer = (state: UserState = initialState, action: Actions): UserState => {
    switch(action.type){
        case ActionTypes.LOGIN:
            console.log("Login");
            return action.payload;
        case ActionTypes.LOGOUT:
            console.log("Logout");
            return initialState;
       default:
           return state;
    }
};

export default userReducer;