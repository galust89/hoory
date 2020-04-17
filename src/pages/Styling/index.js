import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Styling = () => {
  return (
    <div className="styling">
      <Link to="/signup">
        <button>Next</button>
      </Link>
    </div>
  );
};

export default Styling;
