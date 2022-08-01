import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Register, Header, Login } from "./";


const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
   

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUsername={setUsername}
        setPassword={setPassword}
      />
      <div>
        {isLoggedIn ? (
          <Routes></Routes>
        ) : (
          <div>
            <Routes>
              <Route
                path="/Login"
                element={
                  <Login
                    username={username}
                    setuserName={setuserName}
                    password={password}
                    setPassword={setPassword}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              />
              {/* <Route
                path="/Register"
                element={
                  <Register
                    username={username}
                    setuserName={setuserName}
                    password={password}
                    setPassword={setPassword}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              /> */}
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
