import React from "react";
import Select from "react-select";

import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #101b52;

  .relative {
    position: relative;
  }
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
`;

const MultiSelect = ({
  labelName,
  name,
  placeholder,
  option,
  defaultValue,
  onChange,
}) => {
  return (
    <InputWrapper>
      {labelName && <Label htmlFor={name}>{labelName}</Label>}
      <div>
        <Select
          defaultValue={defaultValue}
          placeholder={placeholder}
          options={option}
          onChange={onChange}
          name="tool"
          isMulti
        />
      </div>
    </InputWrapper>
  );
};

export default MultiSelect;
