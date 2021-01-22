import { HOMEPAGE_DECREMENT, HOMEPAGE_INCREMENT } from "../actionTypes/index";
const homepageCounter = (state = 1, action) => {
	switch (action.type) {
		case HOMEPAGE_INCREMENT:
			if (state === 2) return state;
			return state + 1;
		case HOMEPAGE_DECREMENT:
			if (state === 1) return state;
			return state - 1;
		default:
			return state;
	}
};

export default homepageCounter;
