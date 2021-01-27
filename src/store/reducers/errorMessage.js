import { ADD_ERROR, CLEAR_ERROR } from "../actionTypes";

const initialState = "";
const errorMessage = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ERROR:
			state = action.payload;
			return state;
		case CLEAR_ERROR:
			state = "";
			return state;
		default:
			return state;
	}
};
export default errorMessage;
