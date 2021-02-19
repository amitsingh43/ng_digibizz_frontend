import { ADD_ANSWER, NONE_OF_THE_ABOVE, RESET_STORE } from "../actionTypes";

const initialState = [];

const answers = (state = initialState, action) => {
	switch (action.type) {
		case RESET_STORE:
			state = initialState;
			return state;
		case NONE_OF_THE_ABOVE:
			let with_none = [...state].filter((val) => {
				let id = val.id;
				return id.includes(action.payload.id);
			});
			if (with_none.length === 0) {
				return [
					...state.filter((val) => {
						let question = val.question;
						return !question.includes(action.payload.question);
					}),
					action.payload,
				];
			} else {
				return [
					...state.filter((val) => {
						let question = val.question;
						return !question.includes(action.payload.question);
					}),
				];
			}
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
					return [
						...state.filter((val) => {
							if (
								val.type === "none" &&
								val.question === action.payload.question
							) {
							} else {
								return val;
							}
						}),
						action.payload,
					];
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
