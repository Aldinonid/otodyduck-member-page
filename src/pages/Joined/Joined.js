import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #101b52;

  p {
    text-align: center;
  }

  a {
    text-decoration: none;
    background-color: #30c8d6;
    transition-property: all;
    transition-duration: 200ms;
    color: #ffffff;
    padding: 12px 24px;
    border-radius: 5px;
  }

  a:hover {
    background-color: #40dfed;
  }

  .link {
    font-size: 18px;
    cursor: pointer;
    border: none;
    background-color: #30c8d6;
    transition-property: all;
    transition-duration: 200ms;
    color: #ffffff;
    padding: 12px 24px;
    border-radius: 5px;
  }
`;

export { Wrapper };
