import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Register } from "./";

const App = () => {
    const [username, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect (()=>{
        if(localStorage.getItem("token")){
          setIsLoggedIn(true)
        }
        },[]) 
    
    
    
    return (
        <Register/>
    )
}









export default App;