import axios from "axios";
import { GET_NAME, ERROR } from "./types";

export const getName = () => async (dispatch) => {
  try {
    const res = await axios.get("/sample_route");

    dispatch({ type: GET_NAME, payload: res });
  } catch (err) {
    console.error(err);

    dispatch({ type: ERROR, payload: "No Name Found!" });
  }
};
