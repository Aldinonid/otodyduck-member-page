import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { setAuthorizationHeader } from "configs/axios";
import users from "constants/api/users";
import { populateProfile } from "store/actions/users";

import { MemberRoute, GuestRoute } from "components";
import {
  Register,
  Login,
  MyClassPage,
  // CoursePage,
  MyProgressPage,
  SettingsPage,
  NotFound,
  Unauthenticated,
} from "./pages";

function App() {
  const dispatch = useDispatch();
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  useEffect(() => {
    let session = null;
    if (localStorage["OTODYDUCK:token"]) {
      session = JSON.parse(localStorage["OTODYDUCK:token"]);
      setAuthorizationHeader(session.token);

      users
        .details()
        .then((details) => dispatch(populateProfile(details.data)));
    }
  }, [dispatch]);

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoute path="/login" component={Login} />
          <GuestRoute path="/register" component={Register} />
          <GuestRoute path="/private" component={Unauthenticated} />

          <MemberRoute exact path="/" component={MyClassPage} />
          <Route path="/my-progress" component={MyProgressPage} />
          <Route path="/settings" component={SettingsPage} />

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      {/* <Router>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/my-class" component={MyClassPage} />
        <Route path="/course/:class" component={CoursePage} />
      </Router> */}
    </>
  );
}

export default App;
