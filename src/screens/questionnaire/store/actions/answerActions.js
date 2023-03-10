import { ADD_ANSWER, RESET_ANSWERS, NONE_OF_THE_ABOVE, ADD_ANSWERS } from "../actionTypes";

export const reset_answers = () => {
  return {
    type: RESET_ANSWERS,
  };
};

export const add_answer = (answer_id) => {
  return {
    type: ADD_ANSWER,
    payload: answer_id,
  };
};

export const add_answers = (answers) => {
  return {
    type: ADD_ANSWERS,
    payload: answers,
  };
};

export const none_of_the_above = (answer_id) => {
  return {
    type: NONE_OF_THE_ABOVE,
    payload: answer_id,
  };
};
