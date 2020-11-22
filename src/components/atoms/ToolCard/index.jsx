import React from "react";
import { Link } from "react-router-dom";

import { Card } from "./ToolCard";

const ToolCard = ({ data }) => {
  return (
    <Card>
      <Link to={`/tools/${data?.id}`} className="link">
        <div className="thumbnail">
          <img
            src={data ? data?.image : ""}
            alt={data ? data?.name : "Tool Image"}
            className="img img-cover"
          />
        </div>
        <h1>{data?.name ?? "Tool Name"}</h1>
      </Link>
    </Card>
  );
};

export default ToolCard;
