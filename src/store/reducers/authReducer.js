import createReducer from 'util/createReducer';
import { RESET_AUTH, SET_AUTH } from 'store/actionTypes';

const initialState = { user: null, token: null, isAuthenticated: false };
const userDetails = createReducer(initialState, {
	[RESET_AUTH]: (state, payload) => {
		return initialState;
	},
	[SET_AUTH]: (state, payload) => {
		return { ...state, isAuthenticated: payload };
	},
});
export default userDetails;
