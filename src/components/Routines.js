import React, { useEffect, useState } from "react";
import { fetchAllRoutines } from "../api";

const Routines = ({ routines, setRoutines, isLoggedIn, setIsLoggedIn }) => {
  async function getAllRoutines() {
    const fetchRoutines = await fetchAllRoutines();
    setRoutines(fetchRoutines);
  }
  useEffect(() => {
    getAllRoutines();
  }, []);
  
  let getRoutines = [];

  getRoutines = routines.map((routine) => {
   
    return (
      <div className="routinedescriptionBox" key={`routineMap = ${routine.id}`}>
        <h5 className="name">Routine Name: {routine.name}</h5>
        <p className="goal">Goal: {routine.goal}</p>
        <p className="creatorName">Creator Name: {routine.creatorName}</p>
        <div>
          { routine.activities.length > 0 ? (

          
          routine.activities.map((activity) => {
            return (
              <div className="activitydescriptionBox" key={`activityMap = ${activity.id}`} >
                <h5 className="name">Activity: {activity.name}</h5>
                <p className="description">
                  Activity description: {activity.description}
                </p>
                <p className="description">
                  Activity duration: {activity.duration}
                </p>
                <p className="description">Activity count: {activity.count}</p>
              </div>
            );
          }) 
          ) : null } 
        </div>
       
      </div>
    );
  });
  return (
    <div>
      <h3 id ="rtn">Routine</h3>
      {getRoutines}
    </div>
  );
};

export default Routines;
