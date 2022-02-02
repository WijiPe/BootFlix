import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";
import NavBar from '../components/NavBar'

const EditUser = () => {
    const history = useHistory()
    const [loggedinuser, setLoggedInUser] = useState({})    

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
            .then(res => {
                console.log("logged in user info", res)
                setLoggedInUser(res.data)
            })
            .catch(err => {
                history.push('/')
                console.log("errorrrrrr", err)
            })
    }, [])


    return (
        <div>
            <NavBar id={loggedinuser._id} username={loggedinuser.username}/>
        </div>
    )
}

export default EditUser
