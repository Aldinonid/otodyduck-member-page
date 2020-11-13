import React from "react";
import { Link } from "react-router-dom";

import { Gap } from "components";
import { Wrapper } from "./401";

const Unauthenticated = () => {
  return (
    <Wrapper>
      <img
        src={`${process.env.REACT_APP_BASE_URL}/images/illustration-private.jpg`}
        alt="You are not allowed to be here, please login"
      />
      <Gap height={50} />
      <h1>Wow! How are you here?</h1>
      <Gap height={10} />
      <p>
        Seem like you do not have access <br /> for this page. We are sorry
      </p>
      <Gap height={30} />
      <Link to="/login">Logging me in</Link>
    </Wrapper>
  );
};

export default Unauthenticated;
