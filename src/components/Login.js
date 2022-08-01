import React from "react";
import { useNavigate } from "react-router";
import { loginUser } from "../api";

function Login({
  setUsername,
  setPassword,
  username,
  password,
  setIsLoggedIn,
}) {
  let navigate = useNavigate();
  const handleOnChange = (event) => {
    const input = event.target.id;
    if (input === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginUser(username, password);
    token ? setIsLoggedIn(true) : false;
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    setUsername(username);
    navigate("/myRoutines");
  };
  const registerButton = async (event) => {
    event.preventDefault();
    navigate("/Register");
  };

  return (
    <div>
      <form>
        <label>
          Username
          <input
            id="username"
            type="text"
            placeholder="Your Username Here"
            value={username}
            onChange={handleOnChange}
          />
        </label>
        <label>
          Password
          <input
            id="password"
            type="text"
            placeholder="Your Password Here"
            value={password}
            onChange={handleOnChange}
          />
        </label>
        <button id="submit" type="Submit">
          Submit
        </button>
        <button id="register" type="Submit" onClick={registerButton}>
          Don't have an account? Create one here.
        </button>
      </form>
    </div>
  );
}

export default Login;
