import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import ActionPage from '../components/ActionPage';
import HorrorPage from '../components/HorrorPage';
import ComedyPage from '../components/Comedy';
import {useParams, useHistory} from "react-router-dom";
import PopularPage from '../components/PopularPage';


const CatagoryShow = () => {
    
    const history = useHistory()
    const [loggedinuser, setLoggedInUser] = useState({})
    const {catagory} = useParams()

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
            {catagory === "popular" && <PopularPage />}
            {catagory === "action" && <ActionPage />}
            {catagory === "horror" && <HorrorPage />}
            {catagory === "comedy" && <ComedyPage />}


        </div>
    )
}

export default CatagoryShow
