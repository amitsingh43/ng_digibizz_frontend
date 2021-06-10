import { SET_QUESTIONS, GET_QUESTIONS, RESET_QUESTIONS } from "../actionTypes";
import createReducer from "util/createReducer";

const initialState = [];
const questionsList = createReducer(initialState, {
  [SET_QUESTIONS]: (state, payload) => {
    return payload;
  },
  [GET_QUESTIONS]: (state, payload) => {
    return [...state];
  },
  [RESET_QUESTIONS]: (state, payload) => {
    return [];
  },
});
export default questionsList;
