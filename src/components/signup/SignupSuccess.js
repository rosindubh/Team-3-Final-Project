import React from "react";
import { Link } from "react-router-dom";

const SignUpSuccess = () => {

  return (
    <div className="register-success-content">
      <Link to="/" />
      <div classname="success-title-container">
        <h1 className="register-success-title">Welcome to Postcard Pals!</h1>
      </div>
    </div>
  );
};

export default SignUpSuccess;