import { SET_RECOMMENDATIONS } from "../actionTypes";
const initialState = [];

const recommendations = (state = initialState, action) => {
	switch (action.type) {
		case SET_RECOMMENDATIONS:
			return [...state, action.payload];
		default:
			return state;
	}
};
export default recommendations;
