import createReducer from "util/createReducer";
import { SET_USER_DETAILS, RESET_STORE } from "store/actionTypes";

const initialState = { user: null };
const userDetails = createReducer(initialState, {
  [RESET_STORE]: (state, payload) => {
    return initialState;
  },
  [SET_USER_DETAILS]: (state, payload) => {
    return { ...state, user: payload };
  },
});
export default userDetails;
