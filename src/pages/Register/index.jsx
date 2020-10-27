import React from "react";
import { Link } from "react-router-dom";
import { Gap, Input } from "components";
import { Container, RegisterWrapper, Button, LinkToLogin } from "./Register";

const Register = () => {
  return (
    <Container>
      <RegisterWrapper>
        <h2 className="title">New Student</h2>
        <p className="sub-title">Grow Skills From Anywhere</p>
        <Gap height={20} />
        <form>
          <Input
            name="name"
            type="text"
            placeholder="Your Name"
            labelName="Full Name"
          />

          <Gap height={16} />

          <Input
            name="email"
            type="email"
            placeholder="Your Email Address"
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

          <Button type="submit">Join Now</Button>
        </form>
        <Gap height={30} />
        <LinkToLogin>
          Aleady have an account ?{" "}
          <span>
            <Link to="/login" className="link-login">
              Sign Now
            </Link>
          </span>{" "}
        </LinkToLogin>
      </RegisterWrapper>
    </Container>
  );
};

export default Register;
