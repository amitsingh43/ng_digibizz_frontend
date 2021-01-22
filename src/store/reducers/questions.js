import { SET_QUESTIONS, GET_QUESTIONS } from "../actionTypes";

const questionsList = (state = [], action) => {
	switch (action.type) {
		case SET_QUESTIONS:
			state = action.payload;
			return state;
		case GET_QUESTIONS:
			return [...state];
		default:
			return state;
	}
};
export default questionsList;
