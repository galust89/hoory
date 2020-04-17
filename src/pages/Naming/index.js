import React, { useState } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addAssistantName } from "./../../actions/index";

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
      <input
        value={asName}
        onChange={handleNameChange}
        type="text"
        placeholder="asistant name"
      />
      <button onClick={handleClick}>Next</button>
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
