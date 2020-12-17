import React from "react";
import { Link } from "react-router-dom";

import { Card } from "./FlowCard";

const FlowCard = ({ data }) => {
  return (
    <Card>
      <Link to={`/journey/${data?.slug}`} className="link">
        <div className="thumbnail">
          <img
            src={data ? data?.image : ""}
            alt={data ? data?.name : "Flow Image"}
            className="img img-cover"
          />
        </div>
        <h1>{data?.name ?? "Flow Name"}</h1>
      </Link>
    </Card>
  );
};

export default FlowCard;
