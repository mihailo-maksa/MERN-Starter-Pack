import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";

// Set up root reducer
export default combineReducers({
  sample: sampleReducer
});
