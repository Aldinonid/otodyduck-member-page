import React from "react";
import { Link } from "react-router-dom";

import { Gap } from "components";
import { Wrapper } from "./500";

const ServerError = () => {
  return (
    <Wrapper>
      <img
        src={`${process.env.REACT_APP_BASE_URL}/images/illustration-notfound.jpg`}
        alt="Server Error"
      />
      <Gap height={50} />
      <h1>Opps! Server Error</h1>
      <Gap height={10} />
      <p>
        Mostly this cause by the server was busy, <br /> please try again later
      </p>
      <Gap height={30} />
      <Link to="/">Back to Home</Link>
    </Wrapper>
  );
};

export default ServerError;
