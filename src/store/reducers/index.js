import {
  questionCounter,
  questionsList,
  answers
} from "screens/questionnaire/store/reducer";
import { recommendations, results } from "screens/report/store/reducer";
import headerState from "./headerState";
import userDetails from "./userDetails";
import masterData from "./masterData";
import errorMessage from "./errorMessage";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  questionCounter: questionCounter,
  headerState: headerState,
  userDetails: userDetails,
  answers: answers,
  questionsList: questionsList,
  recommendations: recommendations,
  masterData: masterData,
  setResults: results,
  errorMessage: errorMessage,
});

export default allReducers;
