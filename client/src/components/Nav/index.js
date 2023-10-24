import React from "react";
import Auth from "../../utils/Auth"
import { Link } from "react-router-dom"

const Nav = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout()
    }
    return (
      <nav className="button text-white text-center">
        <Link  className="text-xl mr-3"to="/home"> home </Link>

 
        <button 
        className="text-xl"
        onClick={logout}> logout </button>
        
      </nav>
    );
  };
  
  export default Nav;
  