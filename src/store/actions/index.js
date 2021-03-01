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
  RESET_QUESTIONNAIRE,
  ADD_ERROR,
  CLEAR_ERROR,
  NONE_OF_THE_ABOVE,
  RESET_STORE,
} from "../actionTypes/index";
import axios from "axios";
import { toast } from "react-toastify";
import { _get, _post } from "../api";
import Tracking from "../../util/tracking";
// import filedownload from "js-file-download";
var FileSaver = require("file-saver");

export const increment = (payload = 0) => {
  return {
    type: INCREMENT,
    payload,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset_questionnaire = () => {
  return {
    type: RESET_QUESTIONNAIRE,
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
export const none_of_the_above = (answer_id) => {
  return {
    type: NONE_OF_THE_ABOVE,
    payload: answer_id,
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

export const reset_questions = () => {
  return {
    type: RESET_STORE,
  };
};

export const set_recommendations_write = (recommendations) => {
  return {
    type: SET_RECOMMENDATIONS,
    payload: recommendations,
  };
};

export const reset_recommendations = () => {
  return {
    type: RESET_STORE,
  };
};

export const set_results = (results) => {
  return {
    type: SET_RESULTS,
    payload: results,
  };
};

export const reset_results = () => {
  return {
    type: RESET_STORE,
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
    const gender = await _get("/master_data/get_genders");
    dispatch(set_master_data({ industries, cities, turnoverValues, gender }));
  } catch (error) {
    let message = "Something went wrong! Please try later.";

    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      message = error.response.data.message;
    }

    dispatch(add_error(message));
    // show_toast(message);
  }
};

export const add_error = (error) => {
  return {
    type: ADD_ERROR,
    payload: error,
  };
};

export const clear_error = () => {
  return {
    type: CLEAR_ERROR,
  };
};

export const post_user_details = (
  body,
  Navigate,
  ENDPOINT = "/api/save_lead"
) => async (dispatch) => {
<<<<<<< HEAD
  try {
    const response = await _post(ENDPOINT, body);
    const { lead, questionnaire } = response;
    localStorage.setItem("lead_id", lead._id);
    dispatch(set_user_details(lead));
    dispatch(set_questions(questionnaire));
    Navigate();
  } catch (error) {
    let message = "Something went wrong! Please try later.";

    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      message = error.response.data.message;
    }
    dispatch(add_error(message));
    // show_toast(message);
  }
=======
	try {
		const response = await _post(ENDPOINT, body);
		const { lead, questionnaire } = response;
		localStorage.setItem("lead_id", lead._id);
		Tracking.trackEvent("CLICK", "REGISTER USER", "REGISTER");
		dispatch(set_user_details(lead));
		dispatch(set_questions(questionnaire));
		Navigate();
	} catch (error) {
		let message = "Something went wrong! Please try later.";

		if (
			error &&
			error.response &&
			error.response.data &&
			error.response.data.message
		) {
			message = error.response.data.message;
		}
		dispatch(add_error(message));
		// show_toast(message);
	}
>>>>>>> develop
};

export const reset_user = () => {
  return {
    type: RESET_STORE,
  };
};

export const post_answers = (
  options,
  history,
  ENDPOINT = "/api/save_questionnaire"
) => async (dispatch) => {
<<<<<<< HEAD
  try {
    const response = await _post(ENDPOINT, options);
    const { questionnaire_take } = response;
    const { recommendations } = questionnaire_take;
    dispatch(set_recommendations_write(recommendations));
    dispatch(set_results(questionnaire_take));
    dispatch(reset_questionnaire());
    localStorage.setItem("report", "true");
    history.replace("/report");
  } catch (error) {
    let message = "Something went wrong! Please try later.";

    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      message = error.response.data.message;
    }

    dispatch(add_error(message));
    // show_toast(message);
  }
=======
	try {
		const response = await _post(ENDPOINT, options);
		const { questionnaire_take } = response;
		const { recommendations } = questionnaire_take;
		Tracking.trackEvent("CLICK", "ASSESSED CUSTOMERS", "SUBMIT");
		dispatch(set_recommendations_write(recommendations));
		dispatch(set_results(questionnaire_take));
		dispatch(reset_questionnaire());
		localStorage.setItem("report", "true");
		history.replace("/report");
	} catch (error) {
		let message = "Something went wrong! Please try later.";

		if (
			error &&
			error.response &&
			error.response.data &&
			error.response.data.message
		) {
			message = error.response.data.message;
		}

		dispatch(add_error(message));
		// show_toast(message);
	}
>>>>>>> develop
};

export const reset_answers = () => {
  return {
    type: RESET_STORE,
  };
};

export const get_questions = (
  lead_id,
  ENDPOINT = "/api/get_questionnaire?lead_id="
) => async (dispatch) => {
  try {
    const response = await _get(ENDPOINT + lead_id);
    const { lead, questionnaire } = response;
    dispatch(set_user_details(lead));
    dispatch(reset_questionnaire());
    dispatch(set_questions(questionnaire));
  } catch (error) {
    let message = "Something went wrong! Please try later.";

    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      message = error.response.data.message;
    }
    localStorage.clear();
    dispatch(add_error(message));
    // show_toast(message);
  }
};

export const update_lead = (body, ENDPOINT = "/api/update_lead") => async (
  dispatch
) => {
<<<<<<< HEAD
  try {
    const { lead } = await _post(ENDPOINT, body);
    show_toast("Thank you", "SUCCESS");
    dispatch(set_user_details(lead));
  } catch (error) {
    let message = "Something went wrong! Please try later.";

    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      message = error.response.data.message;
    }
    dispatch(add_error(message));
  }
=======
	try {
		const { lead } = await _post(ENDPOINT, body);
		if (body.partner_availed === "NeoGrowth") {
			if (!localStorage.getItem("NG LOAN LEADS")) {
				localStorage.setItem("NG LOAN LEADS", "true");
				Tracking.trackEvent("CLICK", "NG LOAN LEADS", "APPLY NOW");
			}
		} else {
			if (!localStorage.getItem("body.partner_availed")) {
				localStorage.setItem(body.partner_availed, "true");
				Tracking.trackEvent("CLICK", "PARTNER LEADS", body.partner_availed);
			}
		}
		show_toast("Thank you", "SUCCESS");
		dispatch(set_user_details(lead));
	} catch (error) {
		let message = "Something went wrong! Please try later.";

		if (
			error &&
			error.response &&
			error.response.data &&
			error.response.data.message
		) {
			message = error.response.data.message;
		}
		dispatch(add_error(message));
	}
>>>>>>> develop
};

export const save_basic_details = (
  body,
  ENDPOINT = "/api/save_basic_details"
) => async (dispatch) => {
  try {
    const { lead } = await _post(ENDPOINT, body);
    show_toast("Thank you", "SUCCESS");
    dispatch(set_user_details(lead));
  } catch (error) {
    let message = "Something went wrong! Please try later.";

    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      message = error.response.data.message;
    }
    dispatch(add_error(message));
  }
};

export const get_gender = (ENDPOINT = "/master_data/get_genders") => async (
  dispatch
) => {
  try {
    const gender = await _get(ENDPOINT);
    dispatch(set_master_data({ gender }));
  } catch (error) {
    let message = "Something went wrong! Please try later.";

    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      message = error.response.data.message;
    }
    dispatch(add_error(message));
  }
};

export const get_results = (
  lead_id,
  ENDPOINT = "/api/get_results?lead_id="
) => async (dispatch) => {
  try {
    const response = await _get(ENDPOINT + lead_id);
    const { questionnaire_take, lead } = response;
    const { display_recommendations } = questionnaire_take;
    dispatch(set_recommendations_write(display_recommendations));
    dispatch(set_results(questionnaire_take));
    dispatch(set_user_details(lead));
    dispatch(reset_questionnaire());
  } catch (error) {
    let message = "Something went wrong! Please try later.";

    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      message = error.response.data.message;
    }
    localStorage.clear();
    dispatch(add_error(message));
    // show_toast(message);
  }
};

export const downloadReport = (downloadText, setDownloadText) => {
	if (downloadText === "Downloading...") {
		return;
	}
	const method = "GET";
	setDownloadText("Downloading...");
	const url =
		"https://app.advancesuite.in:3061/api/download_report?lead_id=" +
		localStorage.getItem("lead_id");
	axios
		.request({
			url,
			method,
			responseType: "blob", //important
		})
		.then(({ data }) => {
			setDownloadText("Downloaded Report");
			console.log(data);
			// filedownload(data, "DiGiBizz Score Report.pdf");
			var blob = new Blob([data], { type: "application/pdf" });
			console.log(blob);
			FileSaver.saveAs(blob, "DiGibizz Score Report.pdf");
			console.log(window.location.href);
		})
		.catch((err) => {
			setDownloadText("Download Report");
			let message = "Something went wrong! Please try later.";
			// console.log(error);

			if (
				err &&
				err.response &&
				err.response.data &&
				err.response.data.message
			) {
				message = err.response.data.message;
			}
			show_toast(message);
		});
};

export const emailReport = () => async (dispatch) => {
  try {
    const { message } = await _post(
      "/api/email_report?lead_id=" + localStorage.getItem("lead_id")
    );
    show_toast(message, "SUCCESS");
  } catch (error) {
    let message = "Something went wrong! Please try later.";

    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      message = error.response.data.message;
    }
    dispatch(add_error(message));
  }
};

export const show_toast = (message, type = "ERROR") => {
  switch (type) {
    case "ERROR":
      toast.error(message, {
        position: "bottom-left",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    case "SUCCESS":
      toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    default:
      toast(message);
      return;
  }
};
