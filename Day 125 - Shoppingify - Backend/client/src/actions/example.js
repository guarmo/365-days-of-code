import { EXAMPLE } from "./types";

// Action
export const doSomething = (something) => (dispatch) => {
  dispatch({
    type: EXAMPLE,
    payload: something,
  });
};
