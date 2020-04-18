import React from "react";
import "./index.scss";
const Input = ({ value, className, placeholder, handleChange, type }) => {
  return (
    <input
      value={value}
      type={type}
      className={`input ${className}`}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
