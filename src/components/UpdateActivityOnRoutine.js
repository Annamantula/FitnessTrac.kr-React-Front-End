import React, {useState, useEffect} from "react";
import { modifyActivity } from "../api";
//need to refresh to edit activity on routine. FETCH NICK IMMEDIATELY, OR PATCH
function UpdateActivityOnRoutine ({routineActivityId, theOnlyRoutine, setTheOnlyRoutine, activity }) {
    
    const [count,setCount] = useState('')
    const [duration,setDuration] = useState('')
   

    const handleEdit = async (event) => {
        
        event.preventDefault()
        const token = localStorage.getItem("token")
        const modifiedActivity = await modifyActivity(token, routineActivityId, count, duration)
        modifiedActivity.name = activity.name
        modifiedActivity.description = activity.description
        
        const updateActivities = theOnlyRoutine.activities.map((activity) => {
           if(modifiedActivity.activityId == activity.id){
            return modifiedActivity
           } else {
               return activity
           }
        })
        console.log(updateActivities, "is this the updated activities")
        setTheOnlyRoutine({...theOnlyRoutine, activities: updateActivities, modifiedActivity})
    }
    
 return (   
    <div id="editActivityOnRoutineBox">
            <form id="editActivityOnRoutine" onSubmit={handleEdit}>
                <label className="activityOnRoutineDuration" id="actI">
                    Duration:
                </label>
                <input id="durationID" onChange={(event)=>{setDuration(event.target.value)}}  type='text' value = {duration} required/>
                <label className="activityOnRoutineCount" id="actI">
                    Count:
                </label>
                <input  id="durationID" onChange={(event)=>{setCount(event.target.value)}}type='text' value = {count} required/>
                <button className="submitActivityOnRoutine" type="submit" id="actBtn">Edit Activity</button>
            </form>
        </div>

 )
}


export default UpdateActivityOnRoutine