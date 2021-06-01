import { SET_RESULTS, RESET_RESULT } from "../actionTypes";
import { set_recommendations_write } from "./recommendationsActions";
import { set_user_details, add_error } from "store/actions";
import { _get} from "store/api";

export const set_results = (results) => {
  return {
    type: SET_RESULTS,
    payload: results,
  };
};

export const reset_results = () => {
  return {
    type: RESET_RESULT,
  };
};

export const get_results =
  (lead_id, ENDPOINT = "/api/get_results?lead_id=") =>
  async (dispatch) => {
    try {
      const response = await _get(ENDPOINT + lead_id);
      const { questionnaire_take, lead } = response;
      const { display_recommendations } = questionnaire_take;
      dispatch(set_recommendations_write(display_recommendations));
      dispatch(set_results(questionnaire_take));
      dispatch(set_user_details(lead));
      //dispatch(reset_questionnaire());
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
