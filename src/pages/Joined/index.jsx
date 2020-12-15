import React, { useState, useEffect, useCallback } from "react";
import { withRouter, Link } from "react-router-dom";

import courses from "constants/api/courses";

import { Gap } from "components";
import { ServerError } from "pages";
import { Loading } from "parts";
import { Wrapper } from "./Joined";

const Joined = ({ history, match }) => {
  const [state, setState] = useState(() => ({
    isLoading: true,
    isError: false,
    data: {},
  }));

  const joining = useCallback(async () => {
    try {
      const details = await courses.details(match.params.class);
      const joined = await courses.join(details.id);
      if (joined.data.snap_url) {
        window.location.href = joined.data.snap_url;
      } else {
        setState({ isLoading: false, isError: false, data: details });
      }
    } catch (error) {
      if (error?.response?.data?.message === "You already enroll this course") {
        history.push(`/courses/${match.params.class}`);
      }
    }
  }, [match.params.class, history]);

  useEffect(() => {
    joining();
  }, [joining]);

  if (state.isLoading) return <Loading />;
  if (state.isError) return <ServerError />;

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
      <Link to={`/courses/${match.params.class}`} className="link">
        Start Learn
      </Link>
    </Wrapper>
  );
};

export default withRouter(Joined);
