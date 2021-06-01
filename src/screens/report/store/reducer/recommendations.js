import { SET_RECOMMENDATIONS, RESET_RECOMMENDATIONS } from "../actionTypes";
const initialState = [];

const recommendations = (state = initialState, action) => {
	switch (action.type) {
		case RESET_RECOMMENDATIONS:
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
