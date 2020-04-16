import { combineReducers } from "redux";
import user from "./user";
import assistant from "./assistant";

export default combineReducers({
  user,
  assistant,
});
