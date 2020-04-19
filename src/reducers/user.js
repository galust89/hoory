import {
  SIGNUP_USER,
  CREATE_ASSISTANT,
  DELETE_ASSISTANT,
  SET_USER,
} from "./../actions/types";

const Initial_State = {
  firstName: "",
  lastName: "",
  email: "",
  authorized: false,
  assistants: [],
  creationMode: true,
};

const userReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        token: action.token,
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        email: action.user.email,
        authorized: true,
      };
    case CREATE_ASSISTANT:
      return {
        ...state,
        assistants: [...state.assistants, action.assistant],
        creationMode: false,
      };
    case DELETE_ASSISTANT:
      return {
        ...state,
        assistants: state.assistants.filter(
          (el) => el._id !== action.assistantId
        ),
      };
    case SET_USER:
      const { firstName, lastName, email } = action.response;
      return {
        ...state,
        firstName,
        lastName,
        email,
        authorized: true,
        creationMode: false,
      };
    default:
      return state;
  }
};

export default userReducer;
