import styled from "styled-components";

const SettingWrapper = styled.section`
  flex: 1;
  margin: 25px 25px 25px 350px;
  color: #101b52;
  width: 500px;

  .title {
    font-size: 30px;
  }

  .sub-title {
    color: #b0b0b0;
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
        border-radius: 999px;
        overflow: hidden;
        width: 6rem;
        height: 6rem;

        img {
          object-fit: cover;
        }
      }
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

const InputWrapper = styled.section`
  width: 500px;
`;

const Button = styled.button`
  border: 1px solid #30c8d6;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  background-color: #30c8d6;
  border-radius: 5px;
  padding: 10px 30px;
`;

export { SettingWrapper, ImageWrapper, InputWrapper, Button };
