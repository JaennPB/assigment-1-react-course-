import React from "react";

const Input = (props) => {
  return (
    <div>
      <input type="text" onChange={props.inputValue} value={props.username} />
    </div>
  );
};

export default Input;
