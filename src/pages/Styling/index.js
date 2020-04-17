import React, { useState } from "react";
import "./index.scss";
import { connect } from "react-redux";
import RadioButton from "../../components/RadioButton";
import { addAssistantStyle } from "./../../actions/index";
import { useHistory } from "react-router-dom";

const colors = {
  red: "#f00",
  orange: "#ffa500",
  yellow: "#ff0",
};

const Styling = ({ color, addAssistantStyle }) => {
  const history = useHistory();
  const [asColor, setAsColor] = useState(color || colors.red);

  const handleClick = (item) => {
    setAsColor(item);
  };

  const handleButtonClick = () => {
    addAssistantStyle(asColor, () => {
      history.push("/signup");
    });
  };

  return (
    <div className="styling">
      <div className="radioContainer">
        {Object.values(colors).map((item, index) => {
          return (
            <div key={index} onClick={() => handleClick(item)}>
              <RadioButton color={item} selected={item === asColor} />
            </div>
          );
        })}
      </div>
      <button onClick={handleButtonClick}>Next</button>
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
