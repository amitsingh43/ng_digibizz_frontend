import { SET_QUESTIONS, GET_QUESTIONS, RESET_STORE } from "../actionTypes";

const questionsList = (state = [], action) => {
	switch (action.type) {
		case SET_QUESTIONS:
			state = action.payload;
			return state;
		case GET_QUESTIONS:
			return [...state];
		case RESET_STORE:
			state = [];
			return state;
		default:
			return state;
	}
};
export default questionsList;
