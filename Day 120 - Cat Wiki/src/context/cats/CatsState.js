import React, { useReducer } from "react";
import axios from "axios";
import CatsContext from "./catsContext";
import CatsReducer from "./catsReducer";
import { GET_BREEDS } from "../types";

const CatsState = (props) => {
  const initialState = {
    breeds: null,
  };

  const [state, dispatch] = useReducer(CatsReducer, initialState);

  // Get all breeds

  // Get most populat searched cat breeds summary

  // Get top ten most searched cat breeds

  // Get breed details (description, temperament, origin, life span, adaptability, affection level, child friendly, grooming, intelligence, health issues, social needs, stranger friendly )

  return (
    <CatsContext.Provider
      value={{
        breeds: state.breeds,
      }}
    >
      {props.children}
    </CatsContext.Provider>
  );
};

export default CatsState;
