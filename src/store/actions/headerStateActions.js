import {
  HOMEPAGE_DECREMENT,
  HOMEPAGE_INCREMENT,
  HEADER_DIGITAL_STATUS,
  HEADER_DIGITAL_SERVICES,
  HEADER_USER_GUIDE,
  HEADER_SUCCESS_STORIES,
  HEADER_LOGIN,
  HEADER_RESET,
} from "store/actionTypes";

export const header_digital_status = () => {
  return {
    type: HEADER_DIGITAL_STATUS,
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
export const header_login = () => {
  return {
    type: HEADER_LOGIN,
  };
};
export const header_reset = () => {
  return {
    type: HEADER_RESET,
  };
};
