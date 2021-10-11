import "./App.css";
import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Homepage from "./components/homepage/homepage";

const App = ()=> {
  const [auth, setAuth] = useState({
    auth_status: false,
    email: "",
    myToken: "",
  });

  return (
    <>
 
    <div className="App">
      <Navbar />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login auth={auth} setAuth={setAuth} />

        </Route>
      </Switch>
     </div>
</>
  );
}

export default App;