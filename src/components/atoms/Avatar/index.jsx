import React from "react";
import styled from "styled-components";

const AvatarWrapper = styled.img`
  width: 100px;
  height: 100px;
  border: 3px solid #ffffff;
  border-radius: 100px;
  padding: 5px;
`;

const Avatar = () => {
  return (
    <AvatarWrapper
      src="https://fileak.upbatam.ac.id/fotomhs/171510051.jpg"
      alt="tetst"
    />
  );
};

export default Avatar;
