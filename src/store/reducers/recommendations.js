import { SET_RECOMMENDATIONS, RESET_STORE } from "../actionTypes";
const initialState = [];

const recommendations = (state = initialState, action) => {
	switch (action.type) {
		case RESET_STORE:
			state = initialState;
			return state;
		case SET_RECOMMENDATIONS:
			state = [action.payload];
			return state;
		default:
			return state;
	}
};
export default recommendations;
