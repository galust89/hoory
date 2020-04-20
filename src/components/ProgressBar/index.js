import React from "react";
import "./index.scss";
import DoneIcon from "./../../icons/done";
import { connect } from "react-redux";
import Logo from "../../icons/logo";
const ProgressBar = ({ name, color, authorized, creationMode }) => {
  console.log(creationMode);
  return (
    <div className="progressBar">
      <Logo />
      <div className="line" />
      <div>
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
        {creationMode ? (
          <div className="step">
            <div className="iconContainer">
              {authorized ? <DoneIcon /> : <div className="emptyCircle" />}
            </div>
            <div>Create your account</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.assistant.name,
  color: state.assistant.color,
  authorized: state.user.authorized,
  creationMode: state.user.creationMode,
});

export default connect(mapStateToProps, null)(ProgressBar);
