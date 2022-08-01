import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Register, Header, Login } from "./";


const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect (()=>{
        if(localStorage.getItem("token")){
          setIsLoggedIn(true)
        }
        },[]) 
    
    
    
    return (
      <>
       <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} setPassword={setPassword} />
       <Login/>
       </>

    )
}









export default App;