import React from "react";
import { Fade } from "react-reveal";
import { useDispatch } from "react-redux";

import { setAuthorizationHeader } from "configs/axios";
import users from "constants/api/users";
import { populateProfile } from "store/actions/users";
import useForm from "helpers/hooks/useForm";

import { Link } from "react-router-dom";
import { Gap, Input } from "components";
import { Container, LoginWrapper, Button, LinkToRegister } from "./Login";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [{ Email, Password }, setState] = useForm({
    Email: "",
    Password: "",
  });

  function submit(e) {
    e.preventDefault();

    users
      .login({ email: Email, password: Password })
      .then((res) => {
        setAuthorizationHeader(res.data.token);

        users.details().then((detail) => {
          dispatch(populateProfile(detail.data));

          const production =
            process.env.REACT_APP_FRONTPAGE_URL ===
            "https://otodyduck.netlify.app"
              ? "Domain = otodyduck.netlify.app"
              : "";

          localStorage.setItem(
            "OTODYDUCK:token",
            JSON.stringify({ ...res.data, email: Email })
          );

          const redirect = localStorage.getItem("OTODYDUCK:redirect");
          const userCookie = {
            name: detail.data.name,
            thumbnail: detail.data.avatar,
          };

          const expires = new Date(
            new Date().getTime() + 10 * 24 * 60 * 60 * 1000
          );

          document.cookie = `OTODYDUCK:user=${JSON.stringify(
            userCookie
          )}; expires=${expires.toUTCString()}; path:/; ${production}`;

          history.push(redirect || "/");
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <LoginWrapper>
        <Fade bottom>
          <h2 className="title">Sign In</h2>
          <p className="sub-title">Login to continue studying</p>
          <Gap height={20} />
          <form onSubmit={submit}>
            <Input
              name="Email"
              type="email"
              onChange={setState}
              value={Email}
              placeholder="Email Address"
              labelName="Email Address"
            />

            <Gap height={16} />

            <Input
              name="Password"
              type="password"
              onChange={setState}
              value={Password}
              placeholder="Your Password"
              labelName="Password"
            />

            <Gap height={48} />

            <Button type="submit">Login My Account</Button>
          </form>
          <Gap height={30} />
        </Fade>
        <Fade bottom delay={500}>
          <LinkToRegister>
            Don't have an account ?{" "}
            <span>
              <Link to="/register" className="link-login">
                Join Now
              </Link>
            </span>{" "}
          </LinkToRegister>
        </Fade>
      </LoginWrapper>
    </Container>
  );
};

export default Login;
