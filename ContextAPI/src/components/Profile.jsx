import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function profile() {

    const {user} = useContext(UserContext);

    return user ? <div>Welcome {user.username}</div> : <div>
        <h1>Please Login</h1>
    </div>
}

export default profile