import React, { useState } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addAssistantName } from "./../../actions/index";
import HooryGrey from "../../icons/hooryGrey";
import Button from "../../components/Button";

const Naming = ({ addAssistantName, name }) => {
  let history = useHistory();
  const [asName, setAsName] = useState(name);

  const handleNameChange = (e) => {
    setAsName(e.target.value);
  };

  const handleClick = () => {
    addAssistantName(asName, () => {
      history.push("/style");
    });
  };

  return (
    <div className="naming">
      <HooryGrey />
      <h1>hoory</h1>
      <p>Name your assistant</p>
      <input
        className="nameInput"
        value={asName}
        onChange={handleNameChange}
        type="text"
      />
      <Button handleButtonClick={handleClick} text="Start" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.assistant.name,
});

const mapDispatchToProps = {
  addAssistantName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Naming);
