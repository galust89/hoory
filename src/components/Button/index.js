import React from "react";
import "./index.scss";

const Button = ({ handleButtonClick, children, className, text = "Next" }) => {
  return (
    <span className={`button ${className}`} onClick={handleButtonClick}>
      {text}
      {children}
    </span>
  );
};

export default Button;
