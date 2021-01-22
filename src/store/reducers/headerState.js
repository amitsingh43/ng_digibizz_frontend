import {
	HEADER_DIGITAL_SERVICES,
	HEADER_DIGITAL_STATUS,
	HEADER_USER_GUIDE,
	HEADER_SUCCESS_STORIES,
	HEADER_RESET,
} from "../actionTypes/index";
const headerState = (state = -1, action) => {
	switch (action.type) {
		case HEADER_DIGITAL_STATUS:
			state = state - state + 0;
			return state;
		case HEADER_DIGITAL_SERVICES:
			state = state - state + 1;
			return state;
		case HEADER_USER_GUIDE:
			state = state - state + 2;
			return state;
		case HEADER_SUCCESS_STORIES:
			state = state - state + 3;
			return state;
		case HEADER_RESET:
			state = state - state - 1;
			return state;
		default:
			return state;
	}
};

export default headerState;
