import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  background-color: #ffffff;
  padding: 12px 24px;
  border: 1px solid #101b52;
  font-size: 16px;

  &.error {
    border-color: #ff3434;
    color: #ff3434;
  }

  &.normal {
    border-color: #101b52;
    color: #101b52;

    :focus {
      border-color: #30c8d6;
    }
  }

  :focus {
    outline: none;
  }
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 8px;

  &.text-red {
    color: #ff3434;
  }

  &.text-normal {
    color: #101b52;
  }
`;

export { InputWrapper, InputField, Label };
