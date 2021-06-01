import createReducer from "util/createReducer";
import { SET_MASTER_DATA } from "../actionTypes";

const initialState = {
  cities: [],
  industries: [],
  turnoverValues: [],
  gender: [],
};
const masterData = createReducer(initialState, {
  [SET_MASTER_DATA]: (state, payload) => {
    return payload;
  },
});
export default masterData;
