import { useState } from "react";
import LoginForm from "./LoginForm";
import LogSuccess from "./LogSuccess";

const Login =  ({ auth, setAuth }) => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted ? (
          <LoginForm submitForm={submitForm} auth={auth} setAuth={setAuth}  />
        ) : (
          <LogSuccess  />
        )}
    </div>
  );  
};

export default Login;