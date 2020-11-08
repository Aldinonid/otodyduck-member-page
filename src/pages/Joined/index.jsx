import React from "react";

import { Gap } from "components";
import { Wrapper } from "./Joineds";

const Joined = ({ histroy, match }) => {
  function joining() {}

  return (
    <Wrapper>
      <img
        src={`${process.env.REACT_APP_BASE_URL}/images/illustration-joined.png`}
        alt="Success join class"
      />
      <Gap height={50} />
      <h1>Welcome to Class</h1>
      <Gap height={10} />
      <p>
        You have successfully joined our <strong></strong> class
      </p>
      <Gap height={30} />
      <span onClick={joining}>Start Learn</span>
    </Wrapper>
  );
};

export default Joined;
