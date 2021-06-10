
import { _get } from "store/api";
import { add_error } from "./errorActions";
import {
    SET_MASTER_DATA,
  } from "store/actionTypes";

  
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