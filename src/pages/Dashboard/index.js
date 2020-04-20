import React, { useEffect } from "react";
import Gravatar from "react-gravatar";
import "./index.scss";
import { connect } from "react-redux";
import Assistant from "../../components/Assistant";
import Button from "../../components/Button";
import {
  deleteAssistant,
  addNewAssistant,
  getAssistants,
  editAsistantLoacl,
} from "./../../actions/index";
import { useHistory } from "react-router-dom";

const Dashboard = ({
  user,
  deleteAssistant,
  addNewAssistant,
  getAssistants,
  editAsistantLoacl,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (user.assistants.length < 1) {
      getAssistants();
    }
  }, []);

  const addAssistant = () => {
    addNewAssistant(() => {
      history.push("/");
    });
  };

  const deleteAs = (id) => {
    console.log(id);
    deleteAssistant(id);
  };

  const editAssistant = (assistant) => {
    editAsistantLoacl(assistant, () => {
      history.push("/");
    });
  };

  return (
    <div className="dashboard">
      <div className="header">
        <div className="userInfo">
          <Gravatar className="avatar" email={user.email} />
          <div className="name-email">
            <div className="name">{`${user.firstName} ${user.lastName}`}</div>
            <div className="email">{user.email}</div>
          </div>
        </div>
        <div className="logout">Logout</div>
      </div>
      <div className="content">
        {user.assistants.map((item) => {
          return (
            <Assistant
              assistant={item}
              deleteAs={deleteAs}
              editAssistant={editAssistant}
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

const mapDispatchToProps = {
  deleteAssistant,
  addNewAssistant,
  getAssistants,
  editAsistantLoacl,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
