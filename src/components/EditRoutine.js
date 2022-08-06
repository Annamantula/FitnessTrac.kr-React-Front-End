import React, {useState, useEffect} from "react";
import { modifyRoutine, fetchAllRoutines, getMyInfo } from "../api";

function EditRoutine ({routine, routineId, routines, setRoutines, setShowEdit}) {
    
    const [name,setName] = useState('')
    const [goal,setGoal] = useState('')
    // const navigate = useNavigate()

    function routineMatches(creatorName, username) {
        if (creatorName === username) 
        return true;
      }

    const handleEdit = async (event) => {
        
        event.preventDefault()
        const token = localStorage.getItem("token")
        // const routineId = post._id
        await modifyRoutine(token, routineId, name, goal)
        
        const editedRoutine = await fetchAllRoutines();
        const user = await getMyInfo(token);
        const myRoutines = editedRoutine.filter((routine) =>
          routineMatches(routine.creatorName, user.username)
        );
        setRoutines(myRoutines)
        setName('')
        setGoal('')
        setShowEdit(false)
    }

    useEffect(()=>{
       
    },[routines])
     
 return (   
    <div id="editRoutineBox">
            <form id="editRoutine" onSubmit={handleEdit}>
                <label className="routineName">
                    Routine Name:
                </label>
                <input onChange={(event)=>{setName(event.target.value)}}type='text' name="name" value = {name} required/>
                <label className="routineName">
                    Goal:
                </label>
                <input id="goalID" onChange={(event)=>{setGoal(event.target.value)}}  type='text' goal='goal' value = {goal} required/>
                <button className="submitRoutine" id = "editRoutineButton" type="submit">Edit Routine</button>
            </form>
        </div>

 )
}


export default EditRoutine