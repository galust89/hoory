import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Naming = () => {
  const [asName, setAsName] = useState("");

  const handleNameChange = (e) => {
    setAsName(e.target.value);
  };

  return (
    <div className="naming">
      <input
        value={asName}
        onChange={handleNameChange}
        type="text"
        placeholder="asistant name"
      />
      <Link to={"/style"}>
        <button>Next</button>
      </Link>
    </div>
  );
};

export default Naming;
