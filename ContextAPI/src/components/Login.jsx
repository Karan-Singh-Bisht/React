import React, {useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function login() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const {setUser} = useContext(UserContext) //Data bhejne ke liye setUser Aur data recieve krne ke liye User.

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='Username' value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
        <button onClick={handleSubmit}></button>
    </div>
  )
}

export default login