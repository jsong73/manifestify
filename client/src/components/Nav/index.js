import React from "react";
import Auth from "../../utils/Auth"
import { Link } from "react-router-dom"

const Nav = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout()
    }
    return (
      <nav className="button ">
        <Link to="/manifestations"> Manifestations </Link>

        <button onClick={logout}> Logout </button>
        
      </nav>
    );
  };
  
  export default Nav;
  