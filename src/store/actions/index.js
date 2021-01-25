import {
	INCREMENT,
	DECREMENT,
	HOMEPAGE_DECREMENT,
	HOMEPAGE_INCREMENT,
	HEADER_DIGITAL_STATUS,
	HEADER_DIGITAL_SERVICES,
	HEADER_USER_GUIDE,
	HEADER_SUCCESS_STORIES,
	HEADER_RESET,
	SET_USER_DETAILS,
	ADD_ANSWER,
	SET_QUESTIONS,
	GET_QUESTIONS,
	SET_RECOMMENDATIONS,
	SET_RESULTS,
	SET_MASTER_DATA,
} from "../actionTypes/index";
import axios from "axios";
import { _get, _post } from "../api";

export const increment = () => {
	return {
		type: INCREMENT,
	};
};
export const decrement = () => {
	return {
		type: DECREMENT,
	};
};

export const homepage_increment = () => {
	return {
		type: HOMEPAGE_INCREMENT,
	};
};

export const homepage_decrement = () => {
	return {
		type: HOMEPAGE_DECREMENT,
	};
};
export const header_digital_status = () => {
	return {
		type: HEADER_DIGITAL_STATUS,
	};
};
export const header_digital_services = () => {
	return {
		type: HEADER_DIGITAL_SERVICES,
	};
};
export const header_user_guide = () => {
	return {
		type: HEADER_USER_GUIDE,
	};
};
export const header_success_stories = () => {
	return {
		type: HEADER_SUCCESS_STORIES,
	};
};
export const header_reset = () => {
	return {
		type: HEADER_RESET,
	};
};
export const set_user_details = (details) => {
	return {
		type: SET_USER_DETAILS,
		payload: details,
	};
};

export const add_answer = (answer_id) => {
	return {
		type: ADD_ANSWER,
		payload: answer_id,
	};
};
export const set_questions = (questions) => {
	return {
		type: SET_QUESTIONS,
		payload: questions,
	};
};
export const get_section_questions = (counter) => {
	return {
		type: GET_QUESTIONS,
		payload: counter,
	};
};

export const set_recommendations_write = (recommendations) => {
	return {
		type: SET_RECOMMENDATIONS,
		payload: recommendations,
	};
};

export const set_results = (results) => {
	return {
		type: SET_RESULTS,
		payload: results,
	};
};

export const set_master_data = (data) => {
	return {
		type: SET_MASTER_DATA,
		payload: data,
	};
};

export const get_master_data = () => async (dispatch) => {
	try {
		const industries = await _get("/master_data/get_industries");
		const cities = await _get("/master_data/get_cities");
		const turnoverValues = await _get("/master_data/get_annual_turnovers");
		dispatch(set_master_data({ industries, cities, turnoverValues }));
	} catch (error) {
		alert(error);
	}
};

export const post_user_details = (
	body,
	Navigate,
	ENDPOINT = "/api/save_lead"
) => async (dispatch) => {
	try {
		// if (localStorage.getItem("lead_id")) {
		// 	alert(localStorage.getItem("lead_id"));
		// 	Navigate();
		// 	return;
		// }
		const response = await _post(ENDPOINT, body);
		const { lead, questionnaire } = response;
		localStorage.setItem("lead_id", lead._id);
		dispatch(set_user_details(lead));
		dispatch(set_questions(questionnaire));
		Navigate();
	} catch (error) {
		alert(error);
	}
};

export const post_answers = (
	options,
	history,
	ENDPOINT = "/api/save_questionnaire"
) => async (dispatch) => {
	try {
		const response = await _post(ENDPOINT, options);
		const { questionnaire_take } = response;
		console.log(response);
		const { section_results, recommendations } = questionnaire_take;
		dispatch(set_recommendations_write(recommendations));
		dispatch(set_results(questionnaire_take));
		history.replace("/report");
	} catch (error) {
		alert(error);
	}
};

export const downloadReport = () => {
	console.log("STARTED");
	const method = "GET";
	const url =
		"https://uat.advancesuite.in:3061/api/download_report?lead_id=hg4axgylxrclm1_vx6xl1g";
	axios
		.request({
			url,
			method,
			responseType: "blob", //important
		})
		.then(({ data }) => {
			const downloadUrl = window.URL.createObjectURL(new Blob([data]));
			const link = document.createElement("a");
			link.href = downloadUrl;
			link.setAttribute("download", "report.pdf"); //any other extension
			document.body.appendChild(link);
			link.click();
			link.remove();
		});
};
