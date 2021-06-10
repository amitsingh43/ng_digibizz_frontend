import { SET_RECOMMENDATIONS, RESET_RECOMMENDATIONS } from "../actionTypes";
import createReducer from "util/createReducer";

const initialState = [];

const recommendations = createReducer(initialState, {
  [RESET_RECOMMENDATIONS]: (state, payload) => {
    return initialState;
  },
  [SET_RECOMMENDATIONS]: (state, payload) => {
    return payload;
  },
});
export default recommendations;
