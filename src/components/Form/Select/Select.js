import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #101b52;

  .relative {
    position: relative;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #101b52;
  padding: 12px 16px;
  border-radius: 5px;

  &.active {
    border-color: #30c8d6;
  }

  > .selected {
    color: #a0aec0;
  }

  :focus {
    outline: none;
  }
`;

const SelectItem = styled.div`
  display: absolute;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #101b52;
  padding: 0.75rem;

  &.hidden {
    display: none;
  }

  > .list-item {
    cursor: pointer;
    padding: 0.25rem 1rem;
    background-color: #ffffff;

    transition-property: all;
    transition-duration: 200ms;

    :hover {
      background-color: #cbd5e0;
    }
  }
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
`;

export { InputWrapper, SelectWrapper, SelectItem, Label };
