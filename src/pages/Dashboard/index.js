import React, { useEffect, useState } from "react";
import Gravatar from "react-gravatar";
import "./index.scss";
import { connect } from "react-redux";
import Assistant from "../../components/Assistant";
import {
  deleteAssistant,
  addNewAssistant,
  getAssistants,
  editAsistantLoacl,
  logout,
} from "./../../actions/index";
import { useHistory } from "react-router-dom";
import Button from "./../../components/Button/index";
import Shape from "./../../icons/Shape";
import Input from "./../../components/Input/index";
import { AiOutlineFileSearch } from "react-icons/ai";

const Dashboard = ({
  user,
  deleteAssistant,
  addNewAssistant,
  getAssistants,
  editAsistantLoacl,
  logout,
}) => {
  const history = useHistory();
  const [filterValue, setFilterValue] = useState("");
  const [assistants, setAssistants] = useState(user.assistants);

  useEffect(() => {
    if (user.assistants.length < 1) {
      getAssistants();
    }
  }, []);

  useEffect(() => {
    if (user.assistants.length > 0) {
      setAssistants(user.assistants);
    }
  }, [user]);

  const addAssistant = () => {
    addNewAssistant(() => {
      history.push("/");
    });
  };

  const deleteAs = (id) => {
    deleteAssistant(id);
  };

  const editAssistant = (assistant) => {
    editAsistantLoacl(assistant, () => {
      history.push("/");
    });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFilterValue(value);
    setAssistants(user.assistants.filter((item) => item.name.includes(value)));
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
        <Button handleButtonClick={logout} text="Logout" className="logout">
          <Shape className="shape-icon" />
        </Button>
      </div>
      <div className="content">
        <div className="search-container">
          <Input
            value={filterValue}
            handleChange={handleInputChange}
            className="search-input"
            type="text"
            placeholder="Search"
          />
          <AiOutlineFileSearch size={20} className="search-icon" />
        </div>

        {assistants.map((item) => {
          return (
            <Assistant
              key={item._id}
              assistant={item}
              deleteAs={deleteAs}
              editAssistant={editAssistant}
            />
          );
        })}
        <div onClick={addAssistant} className="add-new-btn">
          + Add new Workspace
        </div>
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
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
