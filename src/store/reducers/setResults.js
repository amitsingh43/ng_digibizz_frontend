import { SET_RESULTS } from "../actionTypes";

const setResults = (state = {}, action) => {
	switch (action.type) {
		case SET_RESULTS:
			state = action.payload;
			console.log(state);
			return state;
		default:
			return state;
	}
};
export default setResults;
