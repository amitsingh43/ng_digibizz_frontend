import { SET_USER_DETAILS } from "../actionTypes";
const initialState = { user: null };
const userDetails = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DETAILS:
			return { ...state, user: action.payload };
		default:
			return state;
	}
};
export default userDetails;
