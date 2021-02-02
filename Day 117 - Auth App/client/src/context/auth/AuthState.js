import React, { useReducer, useState } from "react";
import axios from "axios";

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";

import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_INFO,
  UPDATE_FAIL,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    updating: false,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Image upload
  // const [imageAsFile, setImageAsFile] = useState("");
  // const [imageAsUrl, setImageAsUrl] = useState("");

  // Handle image as file
  // const handleImageAsFile = (image) => {
  //   setImageAsFile(image);
  // };

  // User loaded
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("/auth");

      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err.response.data,
      });
    }
  };

  // Register
  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/users/register", formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Login
  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/auth/login", formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  // Clear errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  // Update info
  const updateInfo = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put("/users/edit", formData, config);

      dispatch({
        type: UPDATE_INFO,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: UPDATE_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        register,
        clearErrors,
        loadUser,
        login,
        logout,
        updateInfo,
        // imageAsUrl,
        // imageAsFile,
        // handleImageAsFile,
        // setImageAsUrl,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
