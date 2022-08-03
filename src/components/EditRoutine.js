import React, {useState, useEffect} from "react";
import { modifyRoutine } from "../api";
import { fetchAllRoutines } from '../api';

function EditRoutine ({routine, routineId, routines, setRoutines}) {
    
    const [name,setName] = useState('')
    const [goal,setGoal] = useState('')
    // const navigate = useNavigate()
   
    const handleEdit = async (event) => {
        
        event.preventDefault()
        const token = localStorage.getItem("token")
        // const routineId = post._id
        await modifyRoutine(token, routineId, name, goal)
        const newEditedRoutine = await fetchAllRoutines()
        setRoutines(newEditedRoutine)
        setName('')
        setGoal('')
    }

    // useEffect(()=>{
       
    // },[posts])
     
 return (   
    <div id="editRoutineBox">
            <form id="editRoutine" onSubmit={handleEdit}>
                <label className="routineName">
                    Routine Name:
                </label>
                <input onChange={(event)=>{setRoutines(event.target.value)}}type='text' name="name" value = {name} required/>
                <label className="routineNames">
                    Goal:
                </label>
                <input id="goalID" onChange={(event)=>{setGoal(event.target.value)}}  type='text' goal='goal' value = {goal} required/>
                <button className="submitRoutine" type="submit">Edit Routine</button>
            </form>
        </div>

 )
}


export default EditRoutine