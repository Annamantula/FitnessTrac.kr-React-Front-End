import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

function Header({ isLoggedIn, setIsLoggedIn, setUsername, setPassword }) {
 let navigate = useNavigate();
    const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/");
    setUsername("");
    setPassword("");
  };

  return (
    <header>
      <span className="headerLogo" >
       <img src= "../images/PRIAN-1.jpg" alt="logo" className="logotoo"/>
      </span>
      
      {isLoggedIn ? (
        <div className="linkBox" >
          <NavLink className="Links" to="/MyRoutines">
            My Routines
          </NavLink>
          <NavLink className="Links" to="/Routines">
            Routines
          </NavLink>
          <NavLink className="Links" to="/Activities">
            Activities
          </NavLink>
          <button id="logout" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="linkBox">
          <NavLink className="Links" to="/">
            Home
          </NavLink>
          <NavLink className="Links" to="/Login">
            Login
          </NavLink>
          <NavLink className="Links" to="/Routines">
            Routines
          </NavLink>
          <NavLink className="Links" to="/Activities">
            Activities
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;
