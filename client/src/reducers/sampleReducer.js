import { GET_NAME, ERROR } from "../actions/types";

const initialState = {
  name: "",
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NAME:
      return {
        ...state,
        name: action.payload
      };
    case ERROR:
      return {
        error: action.payload
      };
    default:
      return state;
  }
}
