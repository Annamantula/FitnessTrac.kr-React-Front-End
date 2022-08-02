import React, { useEffect, useState } from "react";
import { fetchAllRoutines, getMyInfo } from "../api";
import { CreateRoutine } from "./";
import { NavLink } from "react-router-dom";

const MyRoutines = ({ username, routines, setRoutines }) => {
    // let username = localStorage.getItem("username")
  
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
        // console.log(user, "this is my info");
        const myRoutines = renderedRoutines.filter((routine) =>
          routineMatches(routine.creatorName, user.username)
        );
        console.log(renderedRoutines, "this is rendered")
        console.log(myRoutines, "this is my routine")
        setRoutines(myRoutines);
      }
      renderMyRoutines();
    }
  }, []);

  return (
      
    <div id="myRoutinesBox">
      <h1 className="intro">Welcome {username}!</h1>
      <div id="addNewLink">
        <NavLink to="/CreateRoutine">Create New Routine</NavLink>
      </div>

      <h2 id="myRoutinesTitle">Here are your routines:</h2>
      {routines && routines.length ? (
        routines.map((routine) => {
          return (
            <div className="myRoutinesBox" key={`myRoutineMap = ${routine.id}`}>
              <h5 className="name">Routine Name: {routine.name}</h5>
              <p className="goal">Goal: {routine.goal}</p>
              <p className="creatorName">Creator Name: {routine.creatorName}</p>
              <div>
                {routine.activities.length > 0
                  ? routine.activities.map((activity) => {
                      return (
                        <div
                          className="activitydescriptionBox"
                          key={`activityMap = ${activity.id}`}
                        >
                          <h5 className="name">
                            Activity in Routine: {activity.name}
                          </h5>
                          <p className="description">
                            Activity description: {activity.description}
                          </p>
                          <p className="description">
                            Activity duration: {activity.duration}
                          </p>
                          <p className="description">
                            Activity count: {activity.count}
                          </p>
                        </div>
                      );
                    })
                  : null}
              </div>
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
