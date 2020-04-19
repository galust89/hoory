import {
  ADD_ASSISTANT_NAME,
  ADD_ASSISTANT_STYLE,
  SIGNUP_USER,
  CREATE_ASSISTANT,
  DELETE_ASSISTANT,
  ADD_NEW_ASSISTANT,
  SET_USER,
  ERROR,
} from "./types";
import api from "./../utils/api";

export const addAssistantName = (name, callback) => (dispatch) => {
  dispatch({ type: ADD_ASSISTANT_NAME, name });
  callback();
};

export const addAssistantStyle = (
  color,
  gender,
  name,
  token,
  callback
) => async (dispatch) => {
  dispatch({ type: ADD_ASSISTANT_STYLE, color, gender });
  console.log(token);
  if (token) {
    const assistant = { color, name, gender };
    createAssistant(assistant, callback);
  } else {
    callback();
  }
};

export const signupUser = (user, callback) => async (dispatch) => {
  const response = await api.user.create(user);
  localStorage.setItem("token", response.token);
  dispatch({ type: SIGNUP_USER, token: response.token, user });
  callback();
};

export const createAssistant = (assistant, callback) => async (dispatch) => {
  console.log("dashboard");
  try {
    const response = await api.assistant.create(assistant);
    assistant.id = response.assistant._id;
    dispatch({ type: CREATE_ASSISTANT, assistant });
  } catch (e) {
    dispatch({ type: ERROR, e });
  }

  callback();
};
export const deleteAssistant = (assistantId) => async (dispatch) => {
  try {
    await api.assistant.delete({ _id: assistantId });
    dispatch({ type: DELETE_ASSISTANT, assistantId });
  } catch (e) {
    dispatch({ type: ERROR, e });
  }
};

export const addNewAssistant = (callback) => async (dispatch) => {
  dispatch({ type: ADD_NEW_ASSISTANT });
  callback();
};
export const getUserInfo = () => async (dispatch) => {
  const response = await api.user.getInfo();
  console.log(response);
  dispatch({ type: SET_USER, response });
};
