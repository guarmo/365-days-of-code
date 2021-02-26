import { GET_HISTORY_SL, ADD_HISTORY_SL } from "../actions/types";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Get shopping list (on load)
export const getHistoryLists = () => async (dispatch) => {
  try {
    const historyLists = await axios.get("api/historyLists");
    dispatch({
      type: GET_HISTORY_SL,
      payload: historyLists.data,
    });
  } catch (err) {
    console.error(err);
  }
};

// Add history list
export const addHistoryList = (list) => async (dispatch) => {
  try {
    const historyList = await axios.post(`api/historyLists`, list, config);

    dispatch({
      type: ADD_HISTORY_SL,
      payload: historyList.data,
    });
  } catch (err) {
    console.error(err);
  }
};
