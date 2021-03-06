import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link, withRouter } from "react-router-dom";

import useForm from "helpers/hooks/useForm";
import users from "constants/api/users";
import fieldErrors from "helpers/fieldErrors";

import { Gap, Input, Select } from "components";
import {
  Container,
  RegisterWrapper,
  Button,
  LinkToLogin,
} from "./RegisterMentor";

const RegisterMentor = ({ history }) => {
  const [{ name, email, password, job, otherJob }, setState] = useForm({
    name: "",
    email: "",
    password: "",
    job: "",
    otherJob: "",
  });

  const [errors, setErrors] = useState(null);

  function submit(e) {
    e.preventDefault();

    users
      .register({
        name: name,
        email: email,
        password: password,
        job: job === "others" ? otherJob : job,
        role: "teacher",
      })
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => setErrors(err?.response?.data?.message));
  }

  const ERRORS = fieldErrors(errors);

  return (
    <Container>
      <RegisterWrapper>
        <Fade bottom>
          <h2 className="title">New Teacher</h2>
          <p className="sub-title">Share Your Knowledge To Anyone, Anywhere</p>

          <Gap height={20} />

          <form onSubmit={submit}>
            <Input
              name="name"
              type="text"
              onChange={setState}
              value={name}
              placeholder="Your Name"
              labelName="Full Name"
              error={ERRORS?.name?.message}
            />

            <Gap height={16} />

            <Input
              name="email"
              type="email"
              onChange={setState}
              value={email}
              placeholder="Your Email Address"
              labelName="Email Address"
              error={ERRORS?.email?.message}
            />

            <Gap height={16} />

            <Input
              name="password"
              type="password"
              onChange={setState}
              value={password}
              placeholder="Your Password"
              labelName="Password"
              error={ERRORS?.password?.message}
            />

            <Gap height={16} />

            <Select
              labelName="Occupation"
              name="job"
              value={job}
              fallbackText="Select your Skill"
              onClick={setState}
            >
              <option value="">Select your skill</option>
              <option value="Web Designer">Web Designer</option>
              <option value="Front-End Developer">Front-End Developer</option>
              <option value="Back-End Developer">Back-End Developer</option>
              <option value="Full-stack Developer">Full-stack Developer</option>
              <option value="others">Others</option>
            </Select>

            {job === "others" && (
              <>
                <Gap height={16} />

                <Input
                  name="otherJob"
                  type="text"
                  onChange={setState}
                  value={otherJob}
                  placeholder="Your Occupation"
                  labelName="Other's Occupation"
                />
              </>
            )}

            <Gap height={48} />

            <Button type="submit">Be a Teacher Now</Button>
          </form>
          <Gap height={30} />
        </Fade>

        <Fade bottom delay={500}>
          <LinkToLogin>
            Aleady have an account ?{" "}
            <span>
              <Link to="/login" className="link-login">
                Sign Now
              </Link>
            </span>{" "}
          </LinkToLogin>
        </Fade>
      </RegisterWrapper>
    </Container>
  );
};

export default withRouter(RegisterMentor);
