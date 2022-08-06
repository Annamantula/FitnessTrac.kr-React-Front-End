import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { createRoutine } from '../api'

const CreateRoutine = ({username, setRoutines, routines}) => {
    const [name,setName] = useState('')
    const [goal,setGoal] = useState('')
    const [isPublic, setIsPublic] = useState(false)
    const navigate = useNavigate()

    const handleChange = () => {
        setIsPublic(!isPublic)
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        const token = localStorage.getItem("token")
        const newRoutine = {
            name: name,
            goal: goal,
            isPublic: isPublic,
        }
        const freshRoutine = await createRoutine(token, newRoutine)
        console.log(freshRoutine)
        setRoutines([...routines, freshRoutine])
        navigate('/MyRoutines')   
    } 
        return (
        <div id="newRoutineBox">
            <form id="newRoutine" onSubmit={handleSubmit}>
                <label className="routineName">
                    Name:
                </label>
                <input id="routineGoal" onChange={(event)=>{setName(event.target.value)}}type='text' value = {name} required/>

                <label className="routineGoal">
                    goal:
                </label>
                <input id="routineGoal" onChange={(event)=>{setGoal(event.target.value)}}  type='text' value={goal} required/>
            
                <div className="routineIsPublic" > 
                <input id="checkbox" onChange={handleChange} type='checkbox'  name='isPublic' value={isPublic}/>
                Check here if you want to make this routine public.
                </div> 
                <button className="submitRoutine" type="submit"id ="smbtrt">Submit Routine</button>
            </form>
        </div>
    )
}
export default CreateRoutine