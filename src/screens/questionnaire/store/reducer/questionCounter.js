import { INCREMENT, DECREMENT, RESET_QUESTION_COUNTER, SET_TOPIC_COUNTER } from "../actionTypes";
import createReducer from "util/createReducer";

const initialState = 1;
const questionCounter = createReducer(initialState, {
  [RESET_QUESTION_COUNTER]: (state, payload) => {
    return 1;
  },
  [INCREMENT]: (state, payload) => {
    if (payload !== 0 && payload < 6) {
      state = payload;
      return state;
    }
    if (state === 5) return state;
    return state + 1;
  },
  [DECREMENT]: (state, payload) => {
    if (state === 1) return state;
    return state - 1;
  },
  [SET_TOPIC_COUNTER]: (state, payload) => {
    return payload;
  },
});

export default questionCounter;
