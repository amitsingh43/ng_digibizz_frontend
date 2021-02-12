import { SET_USER_DETAILS, RESET_STORE } from "../actionTypes";
const initialState = { user: null };
const userDetails = (state = initialState, action) => {
	switch (action.type) {
		case RESET_STORE:
			state = initialState;
			return state;
		case SET_USER_DETAILS:
			return { ...state, user: action.payload };
		default:
			return state;
	}
};
export default userDetails;
