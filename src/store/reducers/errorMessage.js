import createReducer from "util/createReducer";
import { ADD_ERROR, CLEAR_ERROR } from "../actionTypes";

const initialState = "";
const errorMessage = createReducer(initialState, {
  [ADD_ERROR]: (state, payload) => {
    return payload;
  },
  [CLEAR_ERROR]: (state, payload) => {
    return "";
  },
});
export default errorMessage;
