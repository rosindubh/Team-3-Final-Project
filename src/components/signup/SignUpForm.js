import validate from "../login/validate";
import UseSignUp from "./UseSignUp";
// import "./Register.css";
import { Link, useHistory } from "react-router-dom";


const SignupForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = UseSignUp(
    submitForm,
    validate
  );

  const history = useHistory();

  const signup = async (e) => {
    try {
      const obj = JSON.stringify({
        name: values.username,
        email: values.email,
        password: values.password,
      });

      const res = await fetch("https://postcard-pals.herokuapp.com/user", {
        mode: "cors",
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: obj,
      });
      const data = await res.json();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="signup-Content">
      
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1 className="sign-up-title">
          Please fill in details below :
        </h1>

        <div className="signup-inputs">
            <label className="signup-label">Username</label>
            <input
              className="signup-input"
              type="text"
              name="username"
              placeholder="UserName"
              value={values.name}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
      
       
          <div className="signup-inputs">
            <label className="signup-label">Email</label>
            <input
              className="signup-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
        
          <div className="signup-inputs">
            <label className="signup-label">Password</label>
            <input
              className="signup-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <button className="signup-input-btn" type="submit" onClick={signup}>
            Sign up
          </button>
          <span className="signup-input-login">
            Already have an Account? <Link to="/login" className="signup-login-btn">LOGIN HERE </Link>
          </span>
        
      </form>
    </div>
  );
};

export default SignupForm;