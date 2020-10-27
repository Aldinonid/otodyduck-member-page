import React from "react";
import Image from "assets/images/img-class-1.jpg";
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

const ClassCard = (props) => {
  return (
    <Card>
      <a href={`/course/1`} className="link">
        <div className="thumbnail">
          <img src={Image} alt="kelas" className="img img-cover" />
        </div>
        <h1>React JS</h1>
        <p className="sub-title">Aldino Efendi</p>
      </a>
    </Card>
  );
};

export default ClassCard;