import React from "react";
import DefaultUser from "assets/images/default-user.png";
import { AvatarWrapper } from "./Avatar";

const Avatar = ({ user }) => {
  return user?.avatar ? (
    <AvatarWrapper src={user.avatar} alt={user.name} />
  ) : (
    <AvatarWrapper src={DefaultUser} alt="User" />
  );
};

export default Avatar;
