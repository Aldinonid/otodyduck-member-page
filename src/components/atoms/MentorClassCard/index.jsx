import React from "react";
import { Link } from "react-router-dom";

import { Card } from "./MentorClassCard";

const MentorClassCard = ({ data }) => {
  return (
    <Card>
      <Link to={`/class/${data?.slug}`} className="link">
        <div className="thumbnail">
          <img
            src={data ? data?.thumbnail : ""}
            alt={data ? data?.name : ""}
            className="img img-cover"
          />
        </div>
        <h1>{data?.name ?? "Class Name"}</h1>
        <p className="sub-title">{data?.mentor_id?.name ?? "Mentor Name"}</p>
      </Link>
    </Card>
  );
};

export default MentorClassCard;
