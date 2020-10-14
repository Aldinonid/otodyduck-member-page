import React, { Children, useState, useRef, useEffect } from "react";
import propTypes from "prop-types";
import { InputWrapper, SelectWrapper, SelectItem, Label } from "./Select";

const Select = ({
  labelName,
  id,
  name,
  value,
  children,
  onClick,
  fallbackText,
}) => {
  const [Toggle, setToggle] = useState(() => false);
  const selectWrapper = useRef(null);

  const items = Children.toArray(children);

  function toggleSelect() {
    setToggle(() => !Toggle);
  }

  function clickOutside(event) {
    if (selectWrapper && !selectWrapper.current.contains(event.target)) {
      setToggle(false);
    }
  }

  useEffect(() => {
    window.addEventListener("mousedown", clickOutside);
    return () => {
      window.addEventListener("mousedown", clickOutside);
    };
  }, []);

  const selected = items.find((item) => item.props.value === value);

  return (
    <InputWrapper>
      {labelName && <Label htmlFor={name}>{labelName}</Label>}
      <div className="relative" ref={selectWrapper} onClick={toggleSelect}>
        <SelectWrapper className={Toggle ? "active" : ""}>
          <span className={value === "" ? "selected" : ""}>
            {selected?.props.children ?? fallbackText}
          </span>
        </SelectWrapper>
        <SelectItem className={Toggle ? "" : "hidden"}>
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="list-item"
                onClick={() =>
                  onClick({ target: { name: name, value: item.props.value } })
                }
              >
                {item.props.children}
              </div>
            );
          })}
        </SelectItem>
      </div>
    </InputWrapper>
  );
};

Select.propTypes = {
  onClick: propTypes.func.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  name: propTypes.string.isRequired,
  fallbackText: propTypes.string,
  labelName: propTypes.string,
  id: propTypes.string,
};

export default Select;
