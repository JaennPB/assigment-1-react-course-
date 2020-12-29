import React from "react";

const Input = (props) => {
  return (
    <div>
      <input type="text" onChange={props.changeUsername} />
    </div>
  );
};

export default Input;
