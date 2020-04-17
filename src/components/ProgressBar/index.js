import React from "react";
import "./index.scss";
import DoneIcon from "./../../icons/done";
import { connect } from "react-redux";

const ProgressBar = ({ name, color, token }) => {
  return (
    <div className="progressBar">
      <div className="step">
        <div className="iconContainer">
          {name ? <DoneIcon /> : <div className="emptyCircle" />}
        </div>
        <div>Name your assistant</div>
      </div>
      <div className="step">
        <div className="iconContainer">
          {color ? <DoneIcon /> : <div className="emptyCircle" />}
        </div>
        <div>Select styles</div>
      </div>
      <div className="step">
        <div className="iconContainer">
          {token ? <DoneIcon /> : <div className="emptyCircle" />}
        </div>
        <div>Name your assistant</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.assistant.name,
  color: state.assistant.color,
  token: state.user.token,
});

export default connect(mapStateToProps, null)(ProgressBar);
