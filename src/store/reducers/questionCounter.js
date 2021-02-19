import {
	INCREMENT,
	DECREMENT,
	RESET_QUESTIONNAIRE,
	RESET_STORE,
} from "../actionTypes/index";
const questionCounter = (state = 1, action) => {
	switch (action.type) {
		case RESET_STORE:
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
		case RESET_QUESTIONNAIRE:
			state = 1;
			return state;
		default:
			return state;
	}
};

export default questionCounter;
