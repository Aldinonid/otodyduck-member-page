import React from "react";
import styled from "styled-components";

const Card = styled.div`
  a {
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

const ClassCard = () => {
  return (
    <Card>
      <a href="/">
        <div className="thumbnail">
          <img
            src="https://lh3.googleusercontent.com/proxy/mDvnAYX2i0fyKlniTTkGY4VnpgNXlBCotu-f-AziRQWY2xmqBIQVT_83nKPXr6tmTH_tshaMgC2TDBl4AeJaX2nfVQqbZZIYilH0urj9WyXvFBKzPjAV"
            alt="kelas"
            className="img img-cover"
          />
        </div>
        <h1>React JS</h1>
        <p className="sub-title">Aldino Efendi</p>
      </a>
    </Card>
  );
};

export default ClassCard;
