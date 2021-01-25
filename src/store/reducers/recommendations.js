import { SET_RECOMMENDATIONS } from "../actionTypes";
const initialState = [];

const recommendations = (state = initialState, action) => {
	switch (action.type) {
		case SET_RECOMMENDATIONS:
			state = [action.payload];
			return state;
		default:
			return state;
	}
};
export default recommendations;
