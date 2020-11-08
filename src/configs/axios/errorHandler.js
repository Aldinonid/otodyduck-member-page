import { toast } from "react-toastify";
import users from "constants/api/users";

import axios, { setAuthorizationHeader } from "./index";

export default function errorHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      const originalRequest = error.config;
      if (error.response.status === 500) {
        message = "Something wrong, we can feel it";
      } else if (error.response.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;
        const session = localStorage["OTODYDUCK:token"]
          ? JSON.parse(localStorage["OTODYDUCK:token"])
          : null;
        return users
          .refresh({
            refresh_token: session.refresh_token,
            email: session.email,
          })
          .then((res) => {
            if (res.data) {
              setAuthorizationHeader(res.data.token);
              localStorage.setItem(
                "OTODYDUCK:token",
                JSON.stringify({ ...session, token: res.data.token })
              );

              originalRequest.headers.token = res.data.token;

              return axios(originalRequest);
            } else {
              window.location.href = "/login";
              localStorage.removeItem("OTODYDUCK:token");
            }
          });
      } else {
        message = error.response.data.message;

        if (typeof message === "string") toast.error(message);
      }
    }
  }
  return Promise.reject(error);
}
