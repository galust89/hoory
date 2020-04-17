import { ADD_ASSISTANT_NAME, ADD_ASSISTANT_STYLE } from "./../actions/types";

const Initial_State = {
  name: "",
  color: null,
  iconType: 1,
};

const assistantReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case ADD_ASSISTANT_NAME:
      return {
        ...state,
        name: action.name,
      };
    case ADD_ASSISTANT_STYLE:
      console.log(action.color);
      return {
        ...state,
        color: action.color,
      };
    default:
      return state;
  }
};

export default assistantReducer;
