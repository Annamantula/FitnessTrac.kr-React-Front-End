import React, { useEffect, useState } from "react";
import { fetchAllRoutines, getMyInfo } from "../api";
import {  SingleRoutine } from "./";
import { NavLink } from "react-router-dom";


const MyRoutines = ({ routines, setRoutines, activities,setActivities }) => {

    let username = localStorage.getItem("username")
  
    function routineMatches(creatorName, username) {
    if (creatorName === username) 
    return true;
  }

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      async function renderMyRoutines() {
        const renderedRoutines = await fetchAllRoutines();
        const user = await getMyInfo(token);
        const myRoutines = renderedRoutines.filter((routine) =>
          routineMatches(routine.creatorName, user.username)
        );
        setRoutines(myRoutines);
      }
      renderMyRoutines();
    }
  }, [routines]);

  return (
      
    <div className="myRoutinesBox">
      <h1 className="intro">Welcome {username}!</h1>
      <div className="createRoutineBox">
        <NavLink id="addNewLink"to="/CreateRoutine">Create a New Fitness Routine</NavLink>
      </div>

      <h2 id="myRoutinesTitle">Your Routines:</h2>
      { routines.length ? (
        routines.map((routine) => {
          // console.log (routine, "routineeeeeeee")
          return (
            <div key={`myRoutineMap = ${routine.id}`} id = "singlertn">
            <SingleRoutine routine={routine} setRoutines={setRoutines} routines={routines} activities={activities} setActivities={setActivities} />
            </div>
          );
        })
      ) : (
        <div id="noRoutines">
          You have not created any routines at this time.
        </div>
      )}
    </div>
  );
};
export default MyRoutines;
