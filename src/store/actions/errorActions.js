import {
    ADD_ERROR,
    CLEAR_ERROR,
  } from "store/actionTypes";

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
  