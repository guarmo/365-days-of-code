import {
  SET_DEFAULT_MODE,
  SET_ADDITEM_MODE,
  SET_DESC_MODE,
  SET_EDIT_MODE,
} from "../actions/types";

// Set default mode
export const setDefaultMode = (bool) => (dispatch) => {
  dispatch({
    type: SET_DEFAULT_MODE,
    payload: bool,
  });
};

// Set addItem mode
export const setAddItemMode = (bool) => (dispatch) => {
  dispatch({
    type: SET_ADDITEM_MODE,
    payload: bool,
  });
};

// Set desc mode
export const setDescMode = (bool) => (dispatch) => {
  dispatch({
    type: SET_DESC_MODE,
    payload: bool,
  });
};

// Set edit mode
export const setEditMode = (bool) => (dispatch) => {
  dispatch({
    type: SET_EDIT_MODE,
    payload: bool,
  });
};
