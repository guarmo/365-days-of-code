import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import "./tailwind.output.css";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // @implement dark mode?
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <Router>
        <div className="app h-screen w-full p-4 sm:p-6 h-screen">
          <Switch>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/edit-profile" component={EditProfile}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
