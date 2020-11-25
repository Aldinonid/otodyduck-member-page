import styled from "styled-components";

const Wrapper = styled.div`
  width: 65%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  z-index: 1000;
  color: #101b52;
  background-color: #ffffff;
  border-radius: 5px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const Button = styled.button`
  border: 1px solid ${(props) => (props.secondary ? "#b0b0b0" : "#30c8d6")};
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  background-color: ${(props) => (props.secondary ? "#b0b0b0" : "#30c8d6")};
  border-radius: 5px;
  padding: 6px 12px;
  margin-right: 20px;
`;

export { Wrapper, Overlay, Button };
