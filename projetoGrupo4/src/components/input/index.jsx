import React from "react";
import * as C from "./style";

const Input = ({ type, placeholder, value, onChange, onBlur }) => {
  return (
    <C.Input
      onBlur={onBlur}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
