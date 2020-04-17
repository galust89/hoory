import { SIGNUP_USER } from "./../actions/types";

const Initial_State = {
  token: null,
  firstName: "",
  lastName: "",
  errorMessage: "",
  assistants: [],
};

const userReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        token: action.token,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
      };
    default:
      return state;
  }
};

export default userReducer;
