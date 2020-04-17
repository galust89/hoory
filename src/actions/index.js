import axios from "axios";
import { ADD_ASSISTANT_NAME, ADD_ASSISTANT_STYLE, SIGNUP_USER } from "./types";

export const addAssistantName = (name, callback) => (dispatch) => {
  dispatch({ type: ADD_ASSISTANT_NAME, name });
  callback();
};

export const addAssistantStyle = (color, callback) => (dispatch) => {
  dispatch({ type: ADD_ASSISTANT_STYLE, color });
  callback();
};

export const signupUser = (user, callback) => async (dispatch) => {
  const token = await axios.post("http://localhost:8000/signup", user);
  console.log(token);
  dispatch({ type: SIGNUP_USER, token, user });
  callback();
};
