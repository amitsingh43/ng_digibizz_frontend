import createReducer from "util/createReducer";
import {
  HEADER_DIGITAL_SERVICES,
  HEADER_DIGITAL_STATUS,
  HEADER_USER_GUIDE,
  HEADER_SUCCESS_STORIES,
  HEADER_RESET,
} from "../actionTypes/index";

const initialState = -1;
const headerState = createReducer(initialState, {
  [HEADER_DIGITAL_STATUS]: (state, payload) => {
    state = state - state + 0;
    return state;
  },
  [HEADER_DIGITAL_SERVICES]: (state, payload) => {
    state = state - state + 1;
    return state;
  },
  [HEADER_USER_GUIDE]: (state, payload) => {
    state = state - state + 2;
    return state;
  },
  [HEADER_SUCCESS_STORIES]: (state, payload) => {
    state = state - state + 3;
    return state;
  },
  [HEADER_RESET]: (state, payload) => {
    state = state - state - 1;
    return state;
  },
});

export default headerState;
