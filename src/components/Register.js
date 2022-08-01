import React, { useState } from 'react'
import { registerPerson } from "../api";


function Register ({username, password, setuserName, setPassword, setIsLoggedIn}) {
    async function handleSubmit(event) {
        event.preventDefault()
        const token = await registerPerson(username, password)
        if (token) {
            setIsLoggedIn(true)  
            localStorage.setItem("token", token)
            localStorage.setItem("username", username )
            setuserName(username)
            }
    } 
    return (
        <div id = "registerBox">
       <form id = "registerFlex" onSubmit={handleSubmit}>
            <h1>Register for your Stranger's Things account</h1>
            <label>Create a username:</label>
            <input className="registerInputs" 
            placeholder="Create username here"
            value = {username}
            onChange={(event)=>{
                setuserName(event.target.value)
            }}>
            </input>
            <label>Creat a Password:</label>
            <input className="registerInputs" 
            placeholder="Create password here"
            value = {password}
                onChange={(event)=>{
                    setPassword(event.target.value)
                }}></input>
            <button type="submit">Create account</button>
        </form>
        </div>
    )
}

export default Register