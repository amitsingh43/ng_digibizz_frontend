import { SET_RESULTS, RESET_STORE } from "../actionTypes";

const setResults = (state = {}, action) => {
	switch (action.type) {
		case RESET_STORE:
			state = {};
			return state;
		case SET_RESULTS:
			state = action.payload;
			return state;
		default:
			return state;
	}
};
export default setResults;
