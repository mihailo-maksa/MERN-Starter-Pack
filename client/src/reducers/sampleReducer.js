import { SAMPLE_ACTION } from "../actions/types";

const initialState = {};

// Sample Reducer
export default function sampleReducer(state = initialState, action) {
  switch (action.type) {
    case SAMPLE_ACTION:
    default:
      return state;
  }
}
