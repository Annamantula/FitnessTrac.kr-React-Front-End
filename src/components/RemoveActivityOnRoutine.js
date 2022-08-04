import React, {useEffect, useState} from 'react'
import { RemoveActivityFromRoutine, fetchAllActivities, getMyInfo } from '../api'

//there is a bug here. you need to refresh in order to get a clean delete. If nick is not who is grading this, please ask him about this bug.

const RemoveActivity = ({routineActivityId, theOnlyRoutine, setTheOnlyRoutine }) => {
    
    return (
        <button
        onClick={async (event) => {
            event.preventDefault();
            const token = localStorage.getItem('token')
            // try {
                let message = "Remove Activity?";
                if (confirm(message)) {
                    let response = await RemoveActivityFromRoutine(
                        token,routineActivityId
                        );
                        if (response.success) {
                    
                            alert("Activity successfully removed!");
                        } else {
                            alert("Impossible to remove activity!");
                        }
                    }
                    const updateActivities = theOnlyRoutine.activities.filter((activity) => activity.routineActivityId != routineActivityId )
                    setTheOnlyRoutine({...theOnlyRoutine, activities: updateActivities})
                // } catch (error) {
                //     throw error;
                // }
            }}
            >
          Remove Activity
        </button>

)}

// import { setRoutines } from './'
  

 
// scnd
// const RemoveActivity  = ({activity, token, routineActivityId}) => {
  
//     const [removed, setRemoved] = useState(false); <-scnd


//  first attempt
//    const handleOnSubmit = async (event) => { 
//         event.preventDefault()
//         const token = localStorage.getItem('token')
//         await RemoveActivityFRoutine(token, routineActivityId)
//         const renderedActivities = await fetchAllActivities();
//         const user = await getMyInfo(token);
//         const myActivities = renderedActivities.filter((activity) =>
//         activityMatches(activity.creatorName, user.username)
//         );
//         setActivities(myActivities);
      
    
//     }  <-first attempt


// scnd
// return (  
//  <button onClick= {async (event) => {
//      event.preventDefault(); 
//      const token = localStorage.getItem('token')
//      await RemoveActivityFromRoutine (token, routineActivityId);
//     //  x
//      const user = await getMyInfo(token);

//  }} >Remove Activity</button>  <-sncd


     
//  first attempt
   //  handleOnSubmit} >   
// <button type="submit">Delete</button>
// </form> 
// )
// } <- first attempt

// )}  <- scnd
export default RemoveActivity