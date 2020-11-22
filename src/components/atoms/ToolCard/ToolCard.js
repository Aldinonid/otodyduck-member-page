import styled from "styled-components";

const Card = styled.div`
  .link {
    text-decoration: none;
    color: #101b52;

    .thumbnail {
      cursor: pointer;

      img {
        height: 100px;
      }
    }

    .sub-title {
      color: #b0b0b0;
    }

    h1 {
      margin-top: 10px;
    }

    :hover {
      h1 {
        text-decoration: underline;
      }
    }
  }
`;

export { Card };
