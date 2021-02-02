import React from "react";
import "./App.css";
import "./tailwind.output.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AlertState from "./context/alert/AlertState";
import AuthState from "./context/auth/AuthState";

import PrivateRoute from "./components/routing/PrivateRoute";
import Alerts from "./components/layout/Alerts";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // @todo implement dark mode?

  return (
    <AuthState>
      <AlertState>
        <Router>
          <div className="m-6">
            <Alerts />
            <Switch>
              <Route exact path="/register" component={Register}></Route>
              <Route exact path="/login" component={Login}></Route>
              <PrivateRoute
                exact
                path="/profile"
                component={Profile}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              ></PrivateRoute>
            </Switch>
          </div>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
