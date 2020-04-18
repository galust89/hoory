import React, { useState } from "react";
import "./index.scss";
import { connect } from "react-redux";
import RadioButton from "../../components/RadioButton";
import { addAssistantStyle } from "./../../actions/index";
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

const Styling = ({ color, addAssistantStyle, name }) => {
  const history = useHistory();
  const [asColor, setAsColor] = useState(color || colors.red);
  const [asType, setAsType] = useState("male");

  const handleClick = (item) => {
    setAsColor(item);
  };

  const handleButtonClick = () => {
    addAssistantStyle(asColor, () => {
      history.push("/signup");
    });
  };

  const handleIconClick = (type) => {
    setAsType(type);
  };

  return (
    <div className="styling">
      <h1>Select {name}'s icon</h1>
      <div className="iconsWrapper">
        <div className="icon" onClick={() => handleIconClick("female")}>
          <FemaleSelected fill={asColor} showStroke={asType === "female"} />
        </div>
        <div className="icon" onClick={() => handleIconClick("male")}>
          <MaleSelected fill={asColor} showStroke={asType === "male"} />
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
  name: state.assistant.name,
  color: state.assistant.color,
});

const mapDispatchToProps = {
  addAssistantStyle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Styling);
