import React from "react";

const Input = (props) => {
  return (
    <input
      type="text"
      onChange={props.inputValue}
      style={props.style}
      value={props.defaultName}
    />
  );
};

export default Input;
