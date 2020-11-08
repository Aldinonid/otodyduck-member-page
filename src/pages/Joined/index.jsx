import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import courses from "constants/api/courses";

import { Gap } from "components";
import { ServerError } from "pages";
import { Wrapper } from "./Joined";

const Joined = ({ history, match }) => {
  const [state, setState] = useState(() => ({
    isLoading: true,
    isError: false,
    data: {},
  }));

  useEffect(() => {
    courses
      .details(match.params.class)
      .then((res) => {
        setState({ isLoading: false, isError: false, data: res });
      })
      .catch((err) => {
        setState({ isLoading: false, isError: true, data: null });
      });
  }, [match.params.class]);

  if (state.isLoading) return <section>Doing Science ...</section>;
  if (state.isError) return <ServerError />;

  function joining() {
    courses
      .join(state.data.id)
      .then((res) => history.push(`/courses/${state.data.id}`))
      .catch((err) => {
        if (err?.response?.data?.message === "You already enroll this course")
          history.push(`/courses/${state.data.id}`);
      });
  }

  return (
    <Wrapper>
      <Gap height={150} />
      <img
        src={`${process.env.REACT_APP_BASE_URL}/images/illustration-joined.jpg`}
        alt="Success join class"
      />
      <Gap height={50} />
      <h1>Welcome to Class</h1>
      <Gap height={10} />
      <p>
        You have successfully joined our <br />{" "}
        <strong>{state.data.name}</strong> class
      </p>
      <Gap height={30} />
      <button onClick={joining}>Start Learn</button>
    </Wrapper>
  );
};

export default withRouter(Joined);
