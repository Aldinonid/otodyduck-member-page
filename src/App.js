import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Register,
  Login,
  MyClassPage,
  CoursePage,
  MyProgressPage,
  SettingsPage,
} from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/my-progress" component={MyProgressPage} />
        <Route path="/my-class" component={MyClassPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/course/:class" component={CoursePage} />
      </Router>
    </div>
  );
}

export default App;
