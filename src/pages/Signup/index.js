import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Signup = () => {
  return (
    <div className="signup">
      <Link to="/signupSuccess">
        <button>Next</button>
      </Link>
    </div>
  );
};

export default Signup;
