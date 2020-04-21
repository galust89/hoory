import React, { useState } from "react";
import "./index.scss";
import Male from "./../../icons/Male";
import Female from "../../icons/Female";
import { GoKebabVertical, GoPencil, GoTrashcan } from "react-icons/go";

const Assistant = ({ assistant, deleteAs, editAssistant }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { gender, name, color, _id } = assistant;
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
        {showOptions ? (
          <>
            <div
              className="icon-container"
              onClick={() => editAssistant(assistant)}
            >
              <GoPencil className="edit" size={15} />
            </div>
            <div onClick={() => deleteAs(_id)} className="icon-container">
              <GoTrashcan className="remove" size={15} color="red" />
            </div>
          </>
        ) : null}

        <div
          onClick={() => setShowOptions(!showOptions)}
          className="icon-container"
        >
          <GoKebabVertical className="menu" size={15} />
        </div>
      </div>
    </div>
  );
};

export default Assistant;
