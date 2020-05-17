import axios from "axios";
import { GET_NAME, CUSTOM_ERROR } from "./types";

export const getName = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/custom/private_route");
    dispatch({ type: GET_NAME, payload: res });
  } catch (err) {
    dispatch({ type: CUSTOM_ERROR });
  }
};
