import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Sidebar } from "components";
import { MyClass } from "containers/organisms";
import styled from "styled-components";

const MainAppWrapper = styled.section`
  display: flex;
`;

const MainApp = () => {
  return (
    <MainAppWrapper>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/my-class" component={MyClass} />
        </Switch>
      </Router>
    </MainAppWrapper>
  );
};

export default MainApp;
