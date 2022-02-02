import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar';
import ActionPage from '../components/ActionPage';
import HorrorPage from '../components/HorrorPage';
import {useParams, useHistory} from "react-router-dom";
import PopularPage from '../components/PopularPage';
import axios from 'axios';



const CatagoryShow = () => {


    const {catagory} = useParams()
    const [loggedinuser, setLoggedInUser] = useState({})
    const history = useHistory()

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
            <NavBar />
            {catagory === "popular" && <PopularPage />}
            {catagory === "action" && <ActionPage />}
            {catagory === "horror" && <HorrorPage />}


        </div>
    )
}

export default CatagoryShow
