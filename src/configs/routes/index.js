import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Register, Login } from "../../containers/pages";

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
      </Switch>
    </Router>
  );
};

export default Routes;
