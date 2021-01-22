import { INCREMENT, DECREMENT } from "../actionTypes/index";
const questionCounter = (state = 1, action) => {
	switch (action.type) {
		case INCREMENT:
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
