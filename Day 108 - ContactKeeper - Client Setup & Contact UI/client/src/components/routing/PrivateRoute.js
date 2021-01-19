// import React, { Component, useContext } from "react";
// import { Route, Redirect } from "react-router-dom";
// import PropTypes from "prop-types";
// import AuthContext from "../../context/auth/authContext";

// const authContext = useContext(AuthContext);
// const {auth: {isAuthenticated, loading}} = authContext;
// const PrivateRoute = ({

//   component: Component,
//   auth: { isAuthenticated, loading },
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       !isAuthenticated && !loading ? (
//         <Redirect to={"/login"} />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />
// );

// PrivateRoute.propTypes = {

// }
