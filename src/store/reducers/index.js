import questionCounter from "./questionCounter";
import homepageCounter from "./homePage";
import headerState from "./headerState";
import userDetails from "./userDetails";
import answers from "./answers";
import questionsList from "./questions";
import recommendations from "./recommendations";
import masterData from "./masterData";
import setResults from "./setResults";
import errorMessage from "./errorMessage";
import { combineReducers } from "redux";

const allReducers = combineReducers({
	questionCounter: questionCounter,
	homepageCounter: homepageCounter,
	headerState: headerState,
	userDetails: userDetails,
	answers: answers,
	questionsList: questionsList,
	recommendations: recommendations,
	masterData: masterData,
	setResults: setResults,
	errorMessage: errorMessage,
});

export default allReducers;
