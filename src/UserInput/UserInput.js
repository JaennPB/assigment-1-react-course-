import React from "react";

const Input = (props) => {
  const inputStyle = {
    padding: "10px",
    marginLeft: "10px",
    borderRadius: "5px",
    backgroundColor: "aliceblue",
    border: "1px solid greenyellow",
  };

  return (
    <input
      type="text"
      onChange={props.inputValue}
      style={inputStyle}
      value={props.defaultName}
    />
  );
};

export default Input;
