import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { setAuthorizationHeader } from "configs/axios";
import users from "constants/api/users";
import { populateProfile } from "store/actions/users";

import { MemberRoute, GuestRoute } from "components";
import { Login, Register, RegisterMentor } from "./pages";
import { Unauthenticated, NotFound, Joined } from "./pages";
import { MyProgressPage, CoursePage, MyClassPage, SettingsPage } from "./pages";
import { ToolsPage, ToolDetailsPage } from "./pages";
import { MyCoursesPage, MyCourseDetailsPage } from "./pages";

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
          <GuestRoute path="/register-mentor" component={RegisterMentor} />
          <GuestRoute path="/private" component={Unauthenticated} />

          <MemberRoute exact path="/" component={MyClassPage} />
          <MemberRoute path="/joined/:class" component={Joined} />
          <MemberRoute
            path="/courses/:class/:chapter/:uid"
            component={CoursePage}
          />
          <MemberRoute path="/courses/:class/" component={CoursePage} />
          <MemberRoute path="/my-progress" component={MyProgressPage} />

          <MemberRoute exact path="/class" component={MyCoursesPage} />
          <MemberRoute path="/class/:slug" component={MyCourseDetailsPage} />

          <MemberRoute exact path="/tools" component={ToolsPage} />
          <MemberRoute path="/tools/:id" component={ToolDetailsPage} />

          <MemberRoute path="/settings" component={SettingsPage} />

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
