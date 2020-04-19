import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import { getToken } from "./utils/getToken";
import { getUserInfo } from "./actions/index";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

if (getToken()) {
  store.dispatch(getUserInfo());
}

export default store;
