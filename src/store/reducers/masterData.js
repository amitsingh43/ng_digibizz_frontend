import { SET_MASTER_DATA } from "../actionTypes";
const initialState = { cities: [], industries: [], turnoverValues: [] };
const masterData = (state = initialState, action) => {
	switch (action.type) {
		case SET_MASTER_DATA:
			state = action.payload;
			return state;
		default:
			return state;
	}
};
export default masterData;
