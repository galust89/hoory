import React from "react";
import "./index.scss";

const RadioButton = ({ selected, color }) => {
  return (
    <div className="radioButton">
      <div
        className="outline"
        style={{
          visibility: selected ? "visible" : "hidden",
          border: `2px solid ${color}`,
        }}
      >
        <div className="content" style={{ background: color }} />
      </div>
    </div>
  );
};

export default RadioButton;
