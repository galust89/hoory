import React from "react";
import "./index.scss";

const Button = ({ handleButtonClick, className, text = "Next" }) => {
  return (
    <span className={`button ${className}`} onClick={handleButtonClick}>
      {text}
    </span>
  );
};

export default Button;
