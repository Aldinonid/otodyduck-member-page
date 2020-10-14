import React from "react";
import { InputWrapper, InputField, Label } from "./Input";
import propTypes from "prop-types";

const Input = ({
  value,
  error,
  name,
  onChange,
  placeholder,
  labelName,
  type,
}) => {
  return (
    <InputWrapper>
      {labelName && (
        <Label htmlFor={name} className={error ? "text-red" : "text-normal"}>
          {labelName}
        </Label>
      )}
      <InputField
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        className={error ? "error" : "normal"}
      />
    </InputWrapper>
  );
};

Input.propTypes = {
  error: propTypes.string,
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  placeholder: propTypes.string,
  labelName: propTypes.string,
  type: propTypes.oneOfType(["text", "email", "password"]),
};

export default Input;
