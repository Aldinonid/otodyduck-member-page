import styled from "styled-components";

const Wrapper = styled.section`
  flex: 1;
  margin: 25px 25px 25px 350px;
  color: #101b52;

  .title {
    font-size: 30px;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 10px;
      font-size: 20px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  .col {
    flex: 25%;
    padding: 20px;

    h1 {
      margin-bottom: 20px;
    }

    li {
      display: flex;
      margin-bottom: 10px;
      font-size: 20px;
    }
  }
`;

const Button = styled.button`
  border: 1px solid ${(props) => (props.remove ? "#d63030" : "#30c8d6")};
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  background-color: ${(props) => (props.remove ? "#d63030" : "#30c8d6")};
  border-radius: 5px;
  padding: 6px 12px;
`;

const ImageWrapper = styled.section`
  display: flex;
  flex-direction: column;

  .item-wrap {
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0 -1.25rem;

    .image-preview {
      width: auto;
      text-align: center;
      padding: 0 1.25rem;
      .image {
        border-radius: 8px;
        overflow: hidden;
        width: 310px;
        height: 200px;

        img {
          object-fit: cover;
        }
      }
    }

    .image-browse {
      transition: 0.3s;
      border: 1px solid #dbdbdb;
      cursor: pointer;
      font-weight: 600;
      font-size: 16px;
      color: #ffffff;
      width: 150px;
      background-color: #dbdbdb;
      border-radius: 5px;
      padding: 6px 12px;
    }
    .image-browse:hover {
      background-color: #cbd5e0;
    }

    .input {
      width: 100%;
      display: flex;
      flex-direction: column;

      span {
        color: #7186a0;
      }
    }
  }
`;

export { Wrapper, Container, Button, ImageWrapper };
