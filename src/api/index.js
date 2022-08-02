const APIURL = `https://fitnesstrac-kr.herokuapp.com/api`

export const registerPerson = async (username, password) => { 
    const response = await fetch (`${APIURL}/users/register`,
    {
        method:"POST",
        headers: { 'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username:username,
            password:password    
        })
   })
   const result = await response.json()
   const token = result.token
   return token
}

export const loginUser = async (username, password) => {
    try{
        const response = await fetch (`${APIURL}/users/login`,
        {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const result = await response.json()
        const token = result.token
        return token

    } catch (error){
        console.error('Trouble fetching users', error)
    }
}


export const getMyInfo = async(token) => {
    const response = await fetch (`${APIURL}/users/me`,
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    )
    const result = await response.json()
    // console.log(result, "this is from getting my info")
    const data = result
  
    return data
}

export const fetchAllActivities = async() => {
    const response = await fetch (`${APIURL}/activities`,
    {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    )
    const result = await response.json()
    // console.log(result, "this is from fetchAllActivities")
    const data = result
    return data
}

export const fetchAllRoutines = async() => {
    const response = await fetch (`${APIURL}/routines`,
    {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    )
    const result = await response.json()
    // console.log(result, "this is from fetchAllRoutines")
    const data = result
    return data
}

export const createRoutine = async(token, addRoutine) => {
    const response = await fetch (`${APIURL}/routines`,
    {
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(
            addRoutine    
        )     
    })
   const result = await response.json()
     const newRoutine = result.routine
     return newRoutine
}
