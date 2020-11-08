import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

const MemberRoute = ({
  component: Component,
  match,
  path,
  location,
  ...rest
}) => {
  const token = localStorage.getItem("OTODYDUCK:token");

  localStorage.removeItem("OTODYDUCK:redirect");

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : path === "/joined/:class" ? (
          <Redirect to={`/login?path=${location.pathname}`} />
        ) : (
          <Redirect to={`/private?path=${location.pathname}`} />
        )
      }
    />
  );
};

export default withRouter(MemberRoute);
