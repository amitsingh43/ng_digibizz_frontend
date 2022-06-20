import {
    GET_QUESTIONS,
    SET_QUESTIONS,
    RESET_QUESTIONS
  } from "../actionTypes";
  import { _post, _get } from "store/api";
  import Tracking from "util/tracking";
  import { reset_questionnaire } from "./questionCounterActions";
  import {
    add_error,
    set_user_details,
  } from "store/actions";
import { useHistory } from "react-router-dom";



  export const get_section_questions = (counter) => {
    return {
      type: GET_QUESTIONS,
      payload: counter,
    };
  };

  export const get_questions =
    (lead_id, ENDPOINT = "/api/get_questionnaire?lead_id=") =>
    async (dispatch) => {
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

  export const set_questions = (questions) => {
    return {
      type: SET_QUESTIONS,
      payload: questions,
    };
  };

  export const reset_questions = () => {
    return {
      type: RESET_QUESTIONS,
    };
  };


  export const post_user_details =
    (body, Navigate, ENDPOINT = "/api/save_lead") =>
    async (dispatch) => {
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
    };


export const socialLoginUpdate =
    (body, Navigate, ENDPOINT = "/api/social_login") =>
        async (dispatch) => {
          try {
            const response = await _post(ENDPOINT, body);
            const { lead, questionnaire } = response;
            /*localStorage.setItem("lead_id", lead._id);
            Tracking.trackEvent("CLICK", "REGISTER USER", "REGISTER");
            dispatch(set_user_details(lead));*/
            Navigate(body);
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
            Navigate(body);
            dispatch(add_error(message));
            // show_toast(message);
          }
        };
