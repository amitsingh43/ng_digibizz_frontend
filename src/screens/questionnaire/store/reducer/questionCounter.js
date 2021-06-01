import {
	INCREMENT,
	DECREMENT,
	RESET_QUESTION_COUNTER,
} from "../actionTypes";

const questionCounter = (state = 1, action) => {
	switch (action.type) {
		case RESET_QUESTION_COUNTER:
			state = 1;
			return state;
		case INCREMENT:
			if (action.payload !== 0 && action.payload < 6) {
				state = action.payload;
				return state;
			}
			if (state === 5) return state;
			return state + 1;
		case DECREMENT:
			if (state === 1) return state;
			return state - 1;
		default:
			return state;
	}
};

export default questionCounter;
