import React, { useState } from "react";
import SignupForm from "./SignUpForm";
import SignUpSuccess from "./SignupSuccess";

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="signup-Container">
        {!isSubmitted ? (
          <SignupForm submitForm={submitForm} />
        ) : (
          <SignUpSuccess />
        )}
      </div>
    </>
  );
};

export default SignUp;