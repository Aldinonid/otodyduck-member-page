import React from "react";
import { Link } from "react-router-dom";
import { Gap, Input } from "components";
import { Container, LoginWrapper, Button, LinkToRegister } from "./Login";

const Login = () => {
  return (
    <Container>
      <LoginWrapper>
        <h2 className="title">Sign In</h2>
        <p className="sub-title">Login to continue studying</p>
        <Gap height={20} />
        <form>
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            labelName="Email Address"
          />

          <Gap height={16} />

          <Input
            name="password"
            type="password"
            placeholder="Your Password"
            labelName="Password"
          />

          <Gap height={48} />

          <Button>
            <Link to="/my-class">Login My Account</Link>
          </Button>
          {/* <Button type="submit">Login My Account</Button> */}
        </form>
        <Gap height={30} />
        <LinkToRegister>
          Don't have an account ?{" "}
          <span>
            <Link to="/register" className="link-login">
              Join Now
            </Link>
          </span>{" "}
        </LinkToRegister>
      </LoginWrapper>
    </Container>
  );
};

export default Login;
