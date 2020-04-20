import React from "react";
import "./index.scss";
import Male from "./../../icons/Male";
import Female from "../../icons/Female";

const Assistant = ({ assistant, deleteAs, editAssistant }) => {
  const {gender, name, color, _id} = assistant
  return (
    <div className="assistant">
      <div className="icons-container">
        {gender === "male" ? (
          <Male width={60} height={50} fill={color} />
        ) : (
          <Female width={60} height={50} fill={color} />
        )}
      </div>

      <div className="name">{name}</div>
      <div className="action-icon">
        <div onClick={()=>editAssistant(assistant)} className="button">Edit</div>
      </div>
      <div onClick={() => deleteAs(_id)} className="button deleteButton">
        Delete
      </div>
    </div>
  );
};

export default Assistant;
