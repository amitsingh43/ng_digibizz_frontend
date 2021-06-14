import { SET_RECOMMENDATIONS, RESET_RECOMMENDATIONS } from "../actionTypes";

export const set_recommendations_write = (recommendations) => {
    return {
      type: SET_RECOMMENDATIONS,
      payload: recommendations,
    };
  };
  
  export const reset_recommendations = () => {
    return {
      type: RESET_RECOMMENDATIONS,
    };
  };