import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { createNewActivity } from '../api'



const CreateActivity = ({ setActivities, activities}) => {
    const [name,setName] = useState('')
    const [description , setDescription] = useState('')
   
    const navigate = useNavigate()
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        const token = localStorage.getItem("token")
        const newActivity = {
            name: name,
            description: description,
        }
        const freshActivity = await createNewActivity(token, newActivity)
        console.log(freshActivity, "is this working")
        setActivities([...activities, freshActivity])
        navigate('/Activities')   
    } 
        return (
        <div id="newActivityBox">
            <form id="newActivity" onSubmit={handleSubmit}>
                <label className="activityName">
                    Name:
                </label>
                <input onChange={(event)=>{setName(event.target.value)}}type='text' value = {name} required/>

                <label className="activityDescription">
                    Description:
                </label>
                <input id="activitydescription" onChange={(event)=>{setDescription(event.target.value)}}  type='text' value={description} required/>
                <button className="submitActivity" type="submit">Submit Activity</button>
            </form>
        </div>
    )
}
export default CreateActivity