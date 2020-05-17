import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import custom from "./custom";

// Set up root reducer
export default combineReducers({
  alert,
  auth,
  custom
});
