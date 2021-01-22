import questionCounter from "./questionCounter";
import homepageCounter from "./homePage";
import headerState from "./headerState";
import userDetails from "./userDetails";
import answers from "./answers";
import questionsList from "./questions";
import recommendations from "./recommendations";
import { combineReducers } from "redux";

const allReducers = combineReducers({
	questionCounter: questionCounter,
	homepageCounter: homepageCounter,
	headerState: headerState,
	userDetails: userDetails,
	answers: answers,
	questionsList: questionsList,
	recommendations: recommendations,
});

export default allReducers;
