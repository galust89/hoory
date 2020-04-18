import React from "react";
import GoogleIcon from "../../icons/GoogleIcon";
import "./index.scss";

const GoogleInput = ({ text, handleClick }) => {
  return (
    <div className="google-input" onClick={handleClick}>
      <GoogleIcon />
      <div className="content-text">Sign {text} with Google</div>
    </div>
  );
};

export default GoogleInput;
