import createReducer from "util/createReducer";
import { SET_USER_DETAILS, RESET_USER } from "store/actionTypes";

const initialState = { user: null };
const userDetails = createReducer(initialState, {
  [RESET_USER]: (state, payload) => {
    return initialState;
  },
  [SET_USER_DETAILS]: (state, payload) => {
    return { ...state, user: payload };
  },
});
export default userDetails;
