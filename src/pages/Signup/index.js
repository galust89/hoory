import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import { signupUser } from "./../../actions/index";
import useForm from "../../utils/useForm";
import { useHistory, Link } from "react-router-dom";
import GoogleInput from "../../components/GoogleInput";
import BreakLine from "../../components/breackLine";
import Input from "./../../components/Input/index";
import Button from "../../components/Button";

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
      <h2>Create your account </h2>
      <GoogleInput text="Up" />
      <BreakLine />
      <div className="inputContainer">
        <input
          className="nameInput"
          type="text"
          placeholder="First name"
          value={userfirstName}
          onChange={setFirstName}
        />
        <div className="line"></div>
        <input
          className="nameInput"
          type="text"
          placeholder="Last name"
          value={userLastName}
          onChange={setLastName}
        />
      </div>
      <Input
        type="text"
        placeholder="Email"
        value={userEmail}
        handleChange={setEmail}
      />
      <Input
        type="password"
        placeholder="Password"
        value={userPassword}
        handleChange={setPassword}
      />
      <div className="text">
        By registering an account with us you agree to the PP and T&C
      </div>
      <Button
        className="create-user-button"
        handleButtonClick={handleButtonClick}
        text="Create account"
      />
      <div className="signinText">
        Have an account? <Link to="/login">Sign in</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  firstName: state.user.firstName,
  lastName: state.user.lastName,
});

const mapDispatchToProps = { signupUser };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
