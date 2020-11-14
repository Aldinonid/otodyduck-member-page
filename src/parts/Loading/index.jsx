import React from "react";
import { css } from "@emotion/core";
import { GridLoader } from "react-spinners";

import styled from "styled-components";

const Wrapper = styled.section`
  margin: auto;
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const override = css`
  div:nth-child(n + 4) {
    background-color: #30c8d6;
  }

  div:nth-child(-n + 5) {
    background-color: #101b52;
  }
`;

const Loading = () => {
  return (
    <Wrapper>
      <GridLoader css={override} size={30} margin={5} />
    </Wrapper>
  );
};

export default Loading;
