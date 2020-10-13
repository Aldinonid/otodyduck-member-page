import React from "react";
import { MainAppWrapper } from "./MainApp";
import { Sidebar } from "components";
import { MyClass } from "containers/organisms";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainApp = () => {
  return (
    <MainAppWrapper>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={MyClass} />
        </Switch>
      </Router>
    </MainAppWrapper>
  );
};

export default MainApp;
