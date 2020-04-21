import React, { useState } from "react";
import "./index.scss";
import { connect } from "react-redux";
import RadioButton from "../../components/RadioButton";
import {
  addAssistantStyle,
  createAssistant,
  editAssistant,
} from "./../../actions/index";
import { useHistory } from "react-router-dom";
import FemaleSelected from "../../icons/FemaleSelected";
import MaleSelected from "../../icons/MaleSelected";

const colors = {
  blueDarck: "#6631FB",
  blueLight: "#40A6EE",
  red: "#B11226",
  green: "#7DC138",
  orange: "#F78E32",
  purple: "#9956C9",
  pink: "#B6419A",
};

const Styling = ({
  color,
  addAssistantStyle,
  createAssistant,
  editAssistant,
  name,
  gender,
  authorized,
  _id,
}) => {
  const history = useHistory();
  const [asColor, setAsColor] = useState(color || colors.blueDarck);
  const [asGender, setAsGender] = useState(gender || "female");

  const handleClick = (item) => {
    setAsColor(item);
  };

  const handleButtonClick = () => {
    if (authorized && _id) {
      const assistant = { color: asColor, gender: asGender, name, _id };
      editAssistant(assistant, () => {
        history.push("/dashboard");
      });
    } else if (authorized) {
      const assistant = { color: asColor, gender: asGender, name };
      createAssistant(assistant, () => {
        history.push("/dashboard");
      });
    } else {
      addAssistantStyle(asColor, asGender, () => {
        history.push("/signup");
      });
    }
  };

  const handleIconClick = (type) => {
    setAsGender(type);
  };

  return (
    <div className="styling">
      <h1>Select {name}'s icon</h1>
      <div className="iconsWrapper">
        <div className="icon" onClick={() => handleIconClick("female")}>
          <FemaleSelected fill={asColor} showStroke={asGender === "female"} />
        </div>
        <div className="icon" onClick={() => handleIconClick("male")}>
          <MaleSelected fill={asColor} showStroke={asGender === "male"} />
        </div>
      </div>
      <h1>Select color scheme</h1>
      <div className="radioContainer">
        {Object.values(colors).map((item, index) => {
          return (
            <div key={index} onClick={() => handleClick(item)}>
              <RadioButton color={item} selected={item === asColor} />
            </div>
          );
        })}
      </div>
      <span className="stye-next-button" onClick={handleButtonClick}>
        Next
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authorized: state.user.authorized,
  name: state.assistant.name,
  color: state.assistant.color,
  gender: state.assistant.gender,
  _id: state.assistant._id,
});

const mapDispatchToProps = {
  addAssistantStyle,
  createAssistant,
  editAssistant,
};

export default connect(mapStateToProps, mapDispatchToProps)(Styling);
