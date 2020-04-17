import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const SignupSuccess = () => {
  return (
    <div className="signupSuccess">
      <Link to="/dashboard">
        <button>Next</button>
      </Link>
    </div>
  );
};

export default SignupSuccess;
