import React from "react";
import * as C from "./style";

const Button = ({ Text, onClick, Type = "button", disabled }) => {
  return (
    <C.Button
      style={{ backgroundColor: disabled ? "#DCDCDC" : "#046ee5" }}
      disabled={disabled}
      type={Type}
      onClick={onClick}
    >
      {Text}
    </C.Button>
  );
};

export default Button;
