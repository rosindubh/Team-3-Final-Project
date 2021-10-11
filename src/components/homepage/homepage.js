import React from 'react';
import { useHistory } from "react-router-dom";
 
function Homepage() {
 const history = useHistory();
  // handle click event of logout button
  const handleLogout = () => {  
     
    localStorage.clear("myToken");
    history.push("/login");
     
  }
 
  return (
    <div>
     <h1>Homepage</h1><br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Homepage;