import React from "react";
import Gravatar from "react-gravatar";
import "./index.scss";
import { connect } from "react-redux";
import Assistant from "../../components/Assistant";
import Button from "../../components/Button";
import { deleteAssistant, addNewAssistant } from "./../../actions/index";
import { useHistory } from "react-router-dom";

const Dashboard = ({ user, deleteAssistant, addNewAssistant }) => {
  const history = useHistory();
  const addAssistant = () => {
    addNewAssistant(() => {
      history.push("/");
    });
  };

  return (
    <div className="dashboard">
      <div className="header">
        <div className="userInfo">
          <Gravatar className="avatar" email={user.email} />
          <div className="name-email">
            <div className="name">{user.name}</div>
            <div className="email">{user.email}</div>
          </div>
        </div>
        <div className="logout">Logout</div>
      </div>
      <div className="content">
        {user.assistants.map((item) => {
          return (
            <Assistant
              name={item.name}
              gender={item.gender}
              color={item.color}
            />
          );
        })}
        <Button text="add new" handleButtonClick={addAssistant} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = { deleteAssistant, addNewAssistant };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
