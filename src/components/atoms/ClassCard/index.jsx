import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Card = styled.div`
  .link {
    text-decoration: none;
    color: #101b52;

    .thumbnail {
      height: 160px;
      cursor: pointer;

      .img {
        width: 100%;
        height: 100%;
      }

      .img-cover {
        object-fit: cover;
      }
    }

    .sub-title {
      color: #b0b0b0;
    }

    :hover {
      h1 {
        text-decoration: underline;
      }
    }
  }
`;

const ClassCard = ({ data }) => {
  console.log(data);
  return (
    <Card>
      <Link to={`/courses/${data?.id}`} className="link">
        <div className="thumbnail">
          <img
            src={data ? data?.thumbnail : ""}
            alt={data ? data?.name : ""}
            className="img img-cover"
          />
        </div>
        <h1>{data?.name ?? "Class Name"}</h1>
        <p className="sub-title">{data?.mentor?.name ?? "Mentor Name"}</p>
      </Link>
    </Card>
  );
};

export default ClassCard;
