import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

const GuestRoute = ({ component: Component, location, ...rest }) => {
  const token = localStorage.getItem("OTODYDUCK:token");
  const params = location?.search.substring(1).split("&");
  const path = params.find((item) => item.indexOf("path") > -1);
  const redirect = path?.split("=")?.[1];

  if (!token && redirect) localStorage.setItem("OTODYDUCK:redirect", redirect);

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Redirect to={`/`} /> : <Component {...props} />
      }
    />
  );
};

export default withRouter(GuestRoute);
