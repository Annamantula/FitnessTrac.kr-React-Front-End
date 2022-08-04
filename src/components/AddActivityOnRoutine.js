import React, { useEffect, useState, } from "react";
import {
  
  addActivitytoRoutine,
  fetchAllActivities,
} from "../api";

function AddActivityOnRoutine({activities, setActivities, routineId, routines,setTheOnlyRoutine, theOnlyRoutine}) {
  const [selectedActivityName, setSelectedActivityName] = useState('');

  const [count, setCount] = useState('')
  const [duration, setDuration] = useState('')

  function routineMatches(selectedActivityName, activityName) {
    if (selectedActivityName === activityName) 
    return true;
  }

  async function handleSubmit (event){ 
      event.preventDefault();
        const retrievedActivity = activities.filter((activity) =>
        routineMatches(selectedActivityName, activity.name)
      );
  
      const activityId = retrievedActivity[0].id

        const attachActivity = await addActivitytoRoutine(activityId, count, duration, routineId)
      
        attachActivity.name = retrievedActivity[0].name
        attachActivity.description = retrievedActivity[0].description
        console.log(attachActivity, "this is activity")
        console.log(theOnlyRoutine, "onlyrouitne")

      setTheOnlyRoutine({...theOnlyRoutine, activities: [...theOnlyRoutine.activities, attachActivity]})
        console.log(theOnlyRoutine, "the second only routine")
    }
    

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="selectactivity">
          Activity <span className="activity-count">({activities.length})</span>
        </label>
        <select
          name="activity"
          id="searchactivity"
          value={selectedActivityName}
          onChange={(event) => {
              console.log(event.target.value, "event target")
            setSelectedActivityName(event.target.value);
          }}
        >
          {activities.map((activity, idx) => {
            //   console.log(activity, "this is activity")
            return (<option key={`${idx}:${activity.name}`} value={activity.name}>
              {activity.name}
            </option>)
          })}
        </select>
        <label htmlFor="count">Count:</label>
        <input
          id="count"
          type="text"
          placeholder="Enter count here"
          onChange={(event)=>{setCount(event.target.value)}}
          value={count}
        />
        <label htmlFor="duration">Duration:</label>
        <input
          id="duration"
          type="text"
          placeholder="Enter duration here"
          onChange={(event)=>{setDuration(event.target.value)}}
          value={duration}
        />
        <button id="messageButton" type='submit'>Submit</button>
      </fieldset>
    </form>
  );
}

export default AddActivityOnRoutine;
