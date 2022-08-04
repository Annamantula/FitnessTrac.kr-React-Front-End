import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchAllRoutines,fetchAllActivities } from "../api";
import { Register, Header, Login, MyRoutines, Activities, Routines, CreateRoutine, CreateActivity } from "./";




const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [myInfo, setMyInfo] = useState([]);
    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);
    
    async function getAllActivities() {
      const fetchActivities = await fetchAllActivities();
      setActivities(fetchActivities);
    }
    useEffect(() => {
      getAllActivities();
    }, []);

    // async function getAllRoutines() {
    //   const fetchRoutines = await fetchAllRoutines();
    //   setRoutines(fetchRoutines);
    // }
    // useEffect(() => {
    //   getAllRoutines();
    // }, []);


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
                    routines={routines}
                    setRoutines={setRoutines}
                    username={username}
                    activities={activities}
                    setActivities = {setActivities}
                  />
                }
              />
              <Route
                path="/Activities"
                element={
                  <Activities
                    activities={activities}
                    setActivities={setActivities}
                    isLoggedIn = {isLoggedIn}
                  />
                }
              />
               <Route
                path="/Routines"
                element={
                  <Routines
                    routines = {routines}
                    setRoutines = {setRoutines}
                    setIsLoggedIn={setIsLoggedIn}
                    isLoggedIn = {isLoggedIn}
                  />
                }
              />
               <Route
                path="/CreateRoutine"
                element={
                  <CreateRoutine
                  setRoutines ={setRoutines} 
                  routines={routines}
                  />
                }
              />
              <Route
                path="/CreateActivity"
                element={
                  <CreateActivity
                  setActivities ={setActivities} 
                  activities={activities}
                  isLoggedIn={isLoggedIn}
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
               <Route
                path="/Routines"
                element={
                  <Routines
                    routines = {routines}
                    setRoutines = {setRoutines}
                    setIsLoggedIn={setIsLoggedIn}
                    isLoggedIn = {isLoggedIn}
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
