import React from "react";

const Input = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={props.inputValue}
        value={props.username}
        style={props.style}
      />
    </div>
  );
};

export default Input;
