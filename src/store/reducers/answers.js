import { ADD_ANSWER } from "../actionTypes";

const initialState = [];

const answers = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ANSWER:
			if (action.payload.type === "radio") {
				return [
					...state.filter((val) => {
						let question = val.question;
						return !question.includes(action.payload.question);
					}),
					action.payload,
				];
			} else {
				let length = [...state].filter((val) => {
					let id = val.id;
					return !id.includes(action.payload.id);
				}).length;
				if (length === [...state].length) {
					return [...state, action.payload];
				} else {
					return [
						...state.filter((val) => {
							let id = val.id;
							return !id.includes(action.payload.id);
						}),
					];
				}
			}
		default:
			return state;
	}
};
export default answers;
