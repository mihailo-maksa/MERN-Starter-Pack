import { GET_NAME, CUSTOM_ERROR } from "../actions/types";

const initialState = "";

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NAME:
      return payload;
    case CUSTOM_ERROR:
      return "Error: Name is not provided.";
    default:
      return state;
  }
}
