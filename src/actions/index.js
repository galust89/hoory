import {
  ADD_ASSISTANT_NAME,
  ADD_ASSISTANT_STYLE,
  SIGNUP_USER,
  CREATE_ASSISTANT,
  DELETE_ASSISTANT,
  ADD_NEW_ASSISTANT,
  SET_USER,
  GET_ASSISTANTS,
  EDIT_ASSISTANT_LOCAL,
  EDIT_ASSISTANT,
  ERROR,
} from "./types";
import api from "./../utils/api";

export const addAssistantName = (name, callback) => (dispatch) => {
  dispatch({ type: ADD_ASSISTANT_NAME, name });
  callback();
};

export const addAssistantStyle = (color, gender, callback) => async (
  dispatch
) => {
  dispatch({ type: ADD_ASSISTANT_STYLE, color, gender });
  callback();
};

export const signupUser = (user, callback) => async (dispatch) => {
  const response = await api.user.create(user);
  localStorage.setItem("token", response.token);
  dispatch({ type: SIGNUP_USER, token: response.token, user });
  callback();
};

export const createAssistant = (assistant, callback) => async (dispatch) => {
  try {
    const response = await api.assistant.create(assistant);
    assistant._id = response.assistant._id;
    dispatch({ type: CREATE_ASSISTANT, assistant });
  } catch (e) {
    dispatch({ type: ERROR, e });
  }
  callback();
};

export const getAssistants = () => async (dispatch) => {
  try {
    const response = await api.assistant.get();
    dispatch({ type: GET_ASSISTANTS, response });
  } catch (e) {
    dispatch({ type: ERROR, e });
  }
};

export const deleteAssistant = (assistantId) => async (dispatch) => {
  console.log(assistantId);
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

export const editAsistantLoacl = (assistant, callback) => (dispatch) => {
  dispatch({ type: EDIT_ASSISTANT_LOCAL, assistant });
  callback();
};

export const editAssistant = (assistant, callback) => async (dispatch) => {
  const response = await api.assistant.update(assistant);
  dispatch({ type: EDIT_ASSISTANT, assistant: response.assistant });
  callback();
};
