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
    set_topic_counter,
  } from "store/actions";
import {add_answers} from "./answerActions";


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

export const get_questions_two =
    (lead_id, nv, Navigate, ENDPOINT = "/api/questionnaire_for_drop_off/") =>
        async (dispatch) => {
          try {
            const response = await _get(ENDPOINT + lead_id);
            const { lead, questionnaire, step } = response;
            localStorage.setItem("lead_id", lead_id);

            if (step === "Digital Discovery"){
              dispatch(set_topic_counter(1));
            }else if (step === "Digital Fulfilment"){
              dispatch(set_topic_counter(2));
            }else if (step === "Digital Transactions"){
              dispatch(set_topic_counter(3));
            }else if (step === "Digital Operations"){
              dispatch(set_topic_counter(4));
            }else if (step === "Digital Engagement"){
              dispatch(set_topic_counter(5));
            }


            if (questionnaire.length > 0 ){
              console.log({questionnaire: questionnaire});
              let state_list = [];
              for (let i = 0; i < questionnaire.length; i++) {
                //console.log({vt: vt});
                let vt = questionnaire[i];
                let answers = vt.answers;
                let questionnaire_section_questions = vt.questionnaire_section_questions;
                for (let j = 0; j < questionnaire_section_questions.length; j++) {
                  let que = questionnaire_section_questions[j];
                  let ans = que.questionnaire_section_answers;
                  for (let f = 0; f < ans.length; f++) {
                    let an = ans[f];
                    if (answers.includes(an._id)){
                      state_list.push({
                        question: que.name,
                        id: an._id,
                        type: que.multiple ? "checkbox" : "radio",
                        section: i
                      });
                    }
                  }
                }
              }
              //console.log({state_list: state_list});
              dispatch(add_answers(state_list));
            }


            //for drop_off sms
            lead.medium = 'drop_off';

            console.log({leadss: lead});
            dispatch(set_user_details(lead));
            //dispatch(reset_questionnaire());
            dispatch(set_questions(questionnaire));
            if (nv){
              Navigate();
            }
          } catch (error) {
            console.log({error: error});
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
