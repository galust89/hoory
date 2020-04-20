import {
  SIGNUP_USER,
  CREATE_ASSISTANT,
  DELETE_ASSISTANT,
  SET_USER,
  GET_ASSISTANTS,
  ADD_NEW_ASSISTANT,
  EDIT_ASSISTANT_LOCAL,
  EDIT_ASSISTANT,
  LOGOUT_USER,
} from "./../actions/types";

const Initial_State = {
  firstName: "",
  lastName: "",
  email: "",
  authorized: false,
  assistants: [],
  creationMode: true,
  initialLoad: false,
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
      const { firstName, lastName, email } = action.user;
      return {
        ...state,
        firstName,
        lastName,
        email,
        authorized: true,
        creationMode: false,
        initialLoad: true,
      };
    case GET_ASSISTANTS:
      return {
        ...state,
        assistants: action.response.assistants,
      };
    case ADD_NEW_ASSISTANT:
      return {
        ...state,
        initialLoad: false,
      };
    case EDIT_ASSISTANT_LOCAL:
      return {
        ...state,
        initialLoad: false,
      };
    case EDIT_ASSISTANT:
      return {
        ...state,
        assistants: state.assistants.map((el) =>
          el._id === action.assistant._id ? action.assistant : el
        ),
      };
    case LOGOUT_USER:
      return Initial_State;

    default:
      return state;
  }
};

export default userReducer;
