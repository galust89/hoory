import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./index.scss";
import Button from "./../../components/Button/index";
import { createAssistant } from "../../actions";
import Male from "./../../icons/Male";
import Female from "../../icons/Female";

const SignupSuccess = ({ name, gender, color, createAssistant }) => {
  const history = useHistory();

  const handleButtonClick = () => {
    createAssistant({ name, gender, color }, () => {
      history.push("/dashboard");
    });
  };
  return (
    <div className="signupSuccess">
      <>
        {gender === "male" ? (
          <Male width={140} height={140} fill={color} />
        ) : (
          <Female width={140} height={140} fill={color} />
        )}
      </>
      <h1>Fantastico</h1>
      <h3>
        You have successfully setup the Hoory widget on your website! Procees to
      </h3>
      <h3 className="text">Admin Dashboard to start training {name}</h3>

      <Button
        text="Go to Admin Dashboard"
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.assistant.name,
  gender: state.assistant.gender,
  color: state.assistant.color,
});

const mapDispatchToProps = { createAssistant };
export default connect(mapStateToProps, mapDispatchToProps)(SignupSuccess);
