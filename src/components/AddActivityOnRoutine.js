import React, { useEffect, useState, } from "react";
import {
  
  addActivitytoRoutine,
  fetchAllActivities,
} from "../api";

function AddActivityOnRoutine({activities, myActivities, setActivities, routineId, routines}) {
  const [selectedActivityName, setSelectedActivityName] = useState('');
  const [selectedActivityId, setSelectedActivityId] = useState('')
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
      console.log(activityId, "acitivtyid")
        const attachActivity = await addActivitytoRoutine(activityId, count, duration, routineId)
        setActivities([...activities, attachActivity]) 
    }
    

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="selectactivity">
          Activity <span className="century-count">({activities.length})</span>
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
