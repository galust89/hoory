import React from "react";
import "./index.scss";
import GoogleInput from "../../components/GoogleInput";
import BreakLine from "../../components/breackLine";
import Input from "../../components/Input";
import useForm from "./../../utils/useForm";
import Button from "./../../components/Button/index";
import { Link } from "react-router-dom";
const Login = () => {
  const [userEmail, setEmail] = useForm("");
  const [userPassword, setPassword] = useForm("");

  const handleButtonClick = () => {};

  return (
    <div className="login">
      <h2>Sign in to your accout </h2>
      <GoogleInput text="In" />
      <BreakLine />
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
      <Button
        className="create-user-button"
        handleButtonClick={handleButtonClick}
        text="Sign up"
      />
      <div className="signinText">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
