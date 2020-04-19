import {
  ADD_ASSISTANT_NAME,
  ADD_ASSISTANT_STYLE,
  ADD_NEW_ASSISTANT,
} from "./../actions/types";

const Initial_State = {
  name: "",
  color: null,
  gender: "",
};

const assistantReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case ADD_ASSISTANT_NAME:
      return {
        ...state,
        name: action.name,
      };
    case ADD_ASSISTANT_STYLE:
      return {
        ...state,
        color: action.color,
        gender: action.gender,
      };
    case ADD_NEW_ASSISTANT:
      return {
        Initial_State,
      };
    default:
      return state;
  }
};

export default assistantReducer;
