import React from "react";
import { Link } from "react-router-dom";

import NoImage from "assets/images/no-image.jpg";
import { Card } from "./UserCard";

const UserCard = ({ data }) => {
  return (
    <Card>
      <Link to={`/users/${data?.id}`} className="link">
        <div className="thumbnail">
          <img
            src={data?.avatar ?? NoImage}
            alt={data?.name ?? "User Image"}
            className="img img-cover"
          />
        </div>
        <h1>{data?.name ?? "User Name"}</h1>
      </Link>
    </Card>
  );
};

export default UserCard;
