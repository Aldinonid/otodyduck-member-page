import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Register, Login, MainApp, Course } from "../../containers/pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/course/:class">
          <Course />
        </Route>

        <Route exact path="/">
          <MainApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
