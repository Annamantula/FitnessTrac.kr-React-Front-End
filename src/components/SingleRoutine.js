import React, { useState } from "react";
import { useNavigate } from "react-router";
import { DeleteRoutine, EditRoutine, AddActivityOnRoutine } from "./";


function SingleRoutine({setRoutines, routine, routines, activities}) {
    const [showEdit, setShowEdit] = useState(false)
    

    function onClick (){
        setShowEdit(!showEdit)
    }

  return (
    <div className="myRoutinesBox" >
      <h5 className="name">Routine Name: {routine.name}</h5>
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
      
      <AddActivityOnRoutine activities={activities} routineId={routine.id}/>

      <div>
        {routines && routine.activities && routines.length > 0
          ? routine.activities.map((activity) => {
              return (
                <div
                  className="activitydescriptionBox"
                  key={`activityMap = ${activity.id}`}
                >
                  <h5 className="name">Activity in Routine: {activity.name}</h5>
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
}

export default SingleRoutine;
