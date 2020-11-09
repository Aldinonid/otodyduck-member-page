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

export { Card };
