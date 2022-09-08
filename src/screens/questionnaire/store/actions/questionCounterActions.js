import {
    INCREMENT,
    DECREMENT,
    RESET_QUESTION_COUNTER,
} from "../actionTypes";
import {_post} from "store/api";
import Tracking from "util/tracking";
import {
    add_error,
} from "store/actions";
import {
    set_results,
    set_recommendations_write,
} from "screens/report/store/actions";


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
        type: RESET_QUESTION_COUNTER,
    };
};


export const createQuestionnare =
    (
        medium,
        lead_id,
        answersArray,
        step,
        completed,
        history,
        ENDPOINT = "/api/create_questionnaire"
    ) =>
        async (dispatch) => {
            let answers = [];
            answersArray.forEach((answer) => answers.push(answer.id));
            try {
                if (step === "Digital Discovery") {
                    const body = {
                        lead_id: lead_id,
                        answers,
                        step: "Digital Discovery",
                    };
                    await _post(ENDPOINT, body);
                    dispatch(increment());
                } else {
                    dispatch(updateQuestionnare(medium, lead_id, answers, step, completed, history));
                }
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
                if (message === "Questionnaire already created.") {
                    dispatch(updateQuestionnare(medium, lead_id, answers, step, completed, history));
                    //dispatch(increment());
                    return;
                }

                dispatch(add_error(message));
            }
        };

export const updateQuestionnare =
    (medium, lead_id, answers, step, completed, history, ENDPOINT = "/api/update_questionnaire") =>
        async (dispatch) => {
            try {
                const body = {
                    lead_id: lead_id,
                    answers,
                    step,
                    completed,
                    medium: medium ? "drop_off":"null"
                };
                const response = await _post(ENDPOINT, body);
                if (completed) {
                    const {questionnaire_take} = response;
                    const {recommendations} = questionnaire_take;
                    Tracking.trackEvent("CLICK", "ASSESSED CUSTOMERS", "SUBMIT");
                    dispatch(set_recommendations_write(recommendations));
                    dispatch(set_results(questionnaire_take));
                    // TODO: is it required?
                    dispatch(reset_questionnaire());
                    localStorage.setItem("report", "true");
                    localStorage.setItem("lead_id", lead_id);
                    history.replace("/report");
                } else {
                    dispatch(increment());
                }
                // if(completed){
                // 	history.replace("/report");
                // }else{
                // 	dispatch(increment());
                // }
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

