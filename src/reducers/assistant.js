import {
  ADD_ASSISTANT_NAME,
  ADD_ASSISTANT_STYLE,
  ADD_NEW_ASSISTANT,
  EDIT_ASSISTANT_LOCAL,
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
    case EDIT_ASSISTANT_LOCAL:
      console.log(action);
      const { name, color, gender, _id } = action.assistant;
      return {
        name,
        color,
        gender,
        _id,
      };
    default:
      return state;
  }
};

export default assistantReducer;
