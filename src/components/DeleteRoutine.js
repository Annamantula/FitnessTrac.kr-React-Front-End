import React, {useEffect} from 'react'
import { removeRoutine, fetchAllRoutines, getMyInfo } from '../api'
// import { setRoutines } from './'



function DeleteRoutine ({routine, routineId, setRoutines}) {

    function routineMatches(creatorName, username) {
        if (creatorName === username) 
        return true;
      }

    const handleOnSubmit = async (event) => { 
        event.preventDefault()
        const token = localStorage.getItem('token')
        await removeRoutine(token, routineId)
        const renderedRoutines = await fetchAllRoutines();
        const user = await getMyInfo(token);
        const myRoutines = renderedRoutines.filter((routine) =>
          routineMatches(routine.creatorName, user.username)
        );
        setRoutines(myRoutines);
      
    
    }   
//  useEffect(()=> {

//  }, [myRoutines])
return (  
 <form onClick={handleOnSubmit} >   
<button id="deleteRoutineButton" type="submit">Delete Routine</button>
</form> 
)
}

export default DeleteRoutine