import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import react, {useState} from "react";
import { fetchRequest} from './utils';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [data, setData] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    //call fetch request for creating user
  setData(fetchRequest(userName, email, pass, setData));
  
  };

  return(
    <div>
      <h1>Sign Up</h1>
      <div className="sign-up">
        <form onSubmit={submitHandler}>
          <input placeholder="UserName" onChange={(e)=> setUserName(e.target.value)} />
          <input placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
          <input placeholder="Password" type='password' onChange={(e) => setPass(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}