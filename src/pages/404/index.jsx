import React from "react";
import { Link } from "react-router-dom";

import { Gap } from "components";
import { Wrapper } from "./404";

const NotFound = () => {
  return (
    <Wrapper>
      <img
        src={`${process.env.REACT_APP_BASE_URL}/images/illustration-notfound.jpg`}
        alt="Oops we lost you"
      />
      <Gap height={50} />
      <h1>Opps! We’re lost</h1>
      <Gap height={10} />
      <p>
        The page that you requested is not <br /> found in our system
      </p>
      <Gap height={30} />
      <Link to="/">Back to Home</Link>
    </Wrapper>
  );
};

export default NotFound;
