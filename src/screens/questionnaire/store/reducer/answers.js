import { ADD_ANSWER, NONE_OF_THE_ABOVE, RESET_ANSWERS, ADD_ANSWERS } from "../actionTypes";
import createReducer from "util/createReducer";

const initialState = [];

const answers = createReducer(initialState, {
  [RESET_ANSWERS]: (state, payload) => {
    return initialState;
  },
  [NONE_OF_THE_ABOVE]: (state, payload) => {
    let with_none = [...state].filter((val) => {
      let id = val.id;
      return id.includes(payload.id);
    });
    if (with_none.length === 0) {
      return [
        ...state.filter((val) => {
          let question = val.question;
          return !question.includes(payload.question);
        }),
        payload,
      ];
    } else {
      return [
        ...state.filter((val) => {
          let question = val.question;
          return !question.includes(payload.question);
        }),
      ];
    }
  },
  [ADD_ANSWER]: (state, payload) => {
    if (payload.type === "radio") {
      return [
        ...state.filter((val) => {
          let question = val.question;
          return !question.includes(payload.question);
        }),
        payload,
      ];
    } else {
      let length = [...state].filter((val) => {
        let id = val.id;
        return !id.includes(payload.id);
      }).length;
      if (length === [...state].length) {
        return [
          ...state.filter((val) => {
            if (val.type === "none" && val.question === payload.question) {
            } else {
              return val;
            }
          }),
          payload,
        ];
      } else {
        return [
          ...state.filter((val) => {
            let id = val.id;
            return !id.includes(payload.id);
          }),
        ];
      }
    }
  },
  [ADD_ANSWERS]: (state, payload) => {
    return payload;
  }
});
export default answers;
