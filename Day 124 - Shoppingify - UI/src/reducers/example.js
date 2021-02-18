// Import types
import { EXAMPLE } from "../actions/types";

// Create initial state
const initialState = [];

export default function alert(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case EXAMPLE:
      return state;
    default:
      return state;
  }
}
