import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import { signupUser } from "./../../actions/index";
import useForm from "../../utils/useForm";
import { useHistory } from "react-router-dom";

const Signup = ({ firstName, lastName, email, signupUser }) => {
  const history = useHistory();
  const [userfirstName, setFirstName] = useForm(firstName);
  const [userLastName, setLastName] = useForm(lastName);
  const [userEmail, setEmail] = useForm(email);
  const [userPassword, setPassword] = useForm("");

  const handleButtonClick = () => {
    signupUser(
      {
        firstName: userfirstName,
        lastName: userLastName,
        email: userEmail,
        password: userPassword,
      },
      () => {
        history.push("/signupSuccess");
      }
    );
  };

  return (
    <div className="signup">
      <input
        type="text"
        placeholder="first name"
        value={userfirstName}
        onChange={setFirstName}
      />
      <input
        type="text"
        placeholder="last name"
        value={userLastName}
        onChange={setLastName}
      />
      <input
        type="text"
        placeholder="email"
        value={userEmail}
        onChange={setEmail}
      />
      <input
        type="text"
        placeholder="password"
        value={userPassword}
        onChange={setPassword}
      />

      <button onClick={handleButtonClick}>Next</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  firstName: state.user.firstName,
  lastName: state.user.lastName,
});

const mapDispatchToProps = { signupUser };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
