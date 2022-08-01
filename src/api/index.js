const APIURL = `https://fitnesstrac-kr.herokuapp.com/api`

export const registerPerson = async (registeredUsername, registeredPassword) => { 
    const response = await fetch (`${APIURL}/users/register`,
    {
        method:"POST",
        headers: { 'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: registeredUsername,
            password:registeredPassword    
        })
   })
   const result = await response.json()
   const token = result.token
   return token
}