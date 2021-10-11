import validate from "./validate";
import UseLogin from "./UseLogin";

const LoginForm = ( { submitForm, auth, setAuth }) => {
        const { handleChange, handleSubmit, values, errors } = UseLogin(
            submitForm,
            validate
          );
      
        const login = async (e) => {
            
            try {
              const obj = JSON.stringify({
                email: values.email,
                password: values.password
              });
        
              const res = await fetch("https://postcard-pals.herokuapp.com/user/login", {
                mode: "cors",
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: obj,
              });
              const data = await res.json();
              console.log(`${data.user.name} has logged in`);
              localStorage.setItem("myToken", data.token);

              


      setAuth({
        ...auth,
        auth_status: data.auth_status,
        email: data.email,
        token: data.secret_token,
      });
      console.log(data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-Content">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1 className="login-title">Login</h1>
        <div className="login-inputs">
          <label className="login-label">Email</label>
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="login-inputs">
          <label className="login-label">Password</label>
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button
          className="login-input-btn login-btn"
          type="submit"
          onClick={login}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;