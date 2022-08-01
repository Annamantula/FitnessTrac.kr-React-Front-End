import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Register, Header, Login, MyRoutines, Activities } from "./";



const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [myInfo, setMyInfo] = useState([]);
    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);
    
   

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
          <Routes>
            <Route
                path="/MyRoutines"
                element={
                  <MyRoutines
                    myInfo={myInfo}
                    setMyInfo={setMyInfo}
                  />
                }
              />
              <Route
                path="/Activities"
                element={
                  <Activities
                    activities={activities}
                    setActivities={setActivities}
                  />
                }
              />
          </Routes>
        ) : (
          <div>
            <Routes>
              <Route
                path="/Login"
                element={
                  <Login
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              />
              <Route
                path="/Register"
                element={
                  <Register
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              />
              <Route
                path="/Activities"
                element={
                  <Activities
                    activities={activities}
                    setActivities={setActivities}
                  />
                }
              />
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
