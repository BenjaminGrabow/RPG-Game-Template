import { combineReducers } from "redux";
import grid from "./grid";
import authentication from "./authentication";

const appReducer = combineReducers({
  grid,
  authentication,
});

const rootReducer = (state, action) => {
  //clears state on logout
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
