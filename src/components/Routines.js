import React, { useEffect, useState } from "react";
import {fetchAllRoutines} from "../api";

const Routines = ({ routines, setRoutines, isLoggedIn, setIsLoggedIn}) => {
    async function getAllRoutines() {
      const fetchRoutines = await fetchAllRoutines();
      setRoutines(fetchRoutines);
    }
    useEffect(() => {
      getAllRoutines();
    }, []);
    console.log(routines, "successfully used the api call from routines.js")
    let getRoutines = [];
  
    getRoutines = routines.map((routine) => {
    //   console.log(routine.id, "is this single routine");
      return (
        <div
          className="routinedescriptionBox"
          key={`routineMap = ${routine.id}`}
        >
          <h5 className="name">Routine Name: {routine.name}</h5>
          <p className="goal">Goal: {routine.goal}</p>
          <p className="creatorName">Creator Name: {routine.creatorName}</p>
        </div>
      );
    });
    return (
      <div>
        <h3>Routine</h3>
        {getRoutines}
      </div>
    );
  };
  export default Routines;