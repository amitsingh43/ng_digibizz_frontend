import { SET_RESULTS, RESET_RESULT } from "../actionTypes";
import createReducer from "util/createReducer";

const initialState = {};
const setResults = createReducer(initialState, {
  [RESET_RESULT]: (state, payload) => {
    return {};
  },
  [SET_RESULTS]: (state, payload) => {
    return payload;
  },
});
export default setResults;
