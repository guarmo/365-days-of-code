import { GET_BREEDS } from "../types";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BREEDS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
