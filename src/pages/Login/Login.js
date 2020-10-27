import styled from "styled-components";

const Container = styled.section`
  display: flex;
  height: 100vh;
  color: #101b52;
`;

const LoginWrapper = styled.div`
  margin: auto;
  width: 400px;
  display: flex;
  flex-direction: column;

  & .title {
    font-weight: 700;
    font-size: 32px;
  }

  & .sub-title {
    color: #b0b0b0;
    font-size: 18px;
  }
`;

const Button = styled.button`
  border: 1px solid #30c8d6;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  width: 100%;
  background-color: #30c8d6;
  border-radius: 5px;
  padding: 6px 12px;
`;

const LinkToRegister = styled.h5`
  font-size: 20px;
  text-align: center;
  color: #b0b0b0;
  font-weight: 500;

  .link-login {
    text-decoration: none;
    font-weight: 600;
    color: #101b52;

    :hover {
      text-decoration: underline;
    }
  }
`;

export { Container, LoginWrapper, Button, LinkToRegister };
