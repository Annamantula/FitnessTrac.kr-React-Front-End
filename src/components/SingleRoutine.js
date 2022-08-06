import React, { useState } from "react";
import { useNavigate } from "react-router";
import { DeleteRoutine, EditRoutine, AddActivityOnRoutine, RemoveActivityOnRoutine, UpdateActivityOnRoutine } from "./";


function SingleRoutine({setRoutines, routine, routines, activities, setActivities}) {
    const [showEdit, setShowEdit] = useState(false)
    const [theOnlyRoutine, setTheOnlyRoutine] = useState(routine)

    function onClick (){
        setShowEdit(!showEdit)
    }

  return (
    <div className="myRoutinesBox" >
      <h5 className="name">Name: {routine.name}</h5>
      <p className="goal">Goal: {routine.goal}</p>
      <p className="creatorName">Creator Name: {routine.creatorName}</p>
      <DeleteRoutine
        routine={routine}
        routineId={routine.id}
        setRoutines={setRoutines}
      />
      <button id="editbutton" onClick={onClick}>Edit Routine</button>
      {showEdit ?
      <EditRoutine
      routineId={routine.id}
      setRoutines={setRoutines}
      routine={routine}
      routines={routines}
      setShowEdit={setShowEdit}
    /> : null
      }
      
      <AddActivityOnRoutine 
      //activities, setActivities, routineId, routines, setTheOnlyRoutine, theOnlyRoutine
      theOnlyRoutine = {theOnlyRoutine} 
      setTheOnlyRoutine = {setTheOnlyRoutine} 
      activities={activities} 
      routineId={routine.id} 
      routines={routines} 
      setActivities = {setActivities} />

      <div>
        { theOnlyRoutine.activities && theOnlyRoutine.activities.length 
          ? theOnlyRoutine.activities.map((activity) => {
              return (
                <div
                  className="activitydescriptionBox"
                  key={`activityMap = ${activity.id}`}
                >
                  <h5 className="name">Activity in Routine: {activity.name}</h5>
                  <p className="description" >
                    Activity description: {activity.description}
                  </p>
                  <p className="description">
                    Activity duration: {activity.duration}
                  </p>
                  <p className="description">
                    Activity count: {activity.count}
                  </p>
                  <UpdateActivityOnRoutine theOnlyRoutine = {theOnlyRoutine} setTheOnlyRoutine = {setTheOnlyRoutine} routineActivityId = {activity.routineActivityId} setActivities = {setActivities} activity={activity} activityName={activity.name} activityDescription ={activity.description}/>
                  <RemoveActivityOnRoutine theOnlyRoutine = {theOnlyRoutine} setTheOnlyRoutine = {setTheOnlyRoutine} routineActivityId = {activity.routineActivityId} setActivities = {setActivities}/>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default SingleRoutine;
