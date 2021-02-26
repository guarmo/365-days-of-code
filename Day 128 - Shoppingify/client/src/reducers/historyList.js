// Import types
import { GET_HISTORY_SL, ADD_HISTORY_SL } from "../actions/types";

// Create initial state
const initialState = {
  lists: [],
};

export default function modes(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_HISTORY_SL:
      return {
        ...state,
        lists: payload,
      };
    case ADD_HISTORY_SL:
      console.log(payload);
      return {
        lists: [...state.lists, payload],
      };
    default:
      return state;
  }
}
