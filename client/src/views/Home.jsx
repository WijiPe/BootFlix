import NavLinks from '../components/NavLinks'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../components/style.module.css'
import {Link} from "react-router-dom";
import Popular from '../components/Popular';

const Home = () => {

    const [loggedinuser, setLoggedInUser] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
            .then(res => {
                console.log("logged in user info", res)
                setLoggedInUser(res.data)
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    }, [])

    return (
        <div>
            <NavLinks />
            <h1>Welcome, {loggedinuser.username}</h1>

            <h3><Link to={`/catagory/popular`}  className={styles.catagoryName}> Popular </Link></h3>
            <Popular />
        </div>
    )
}

export default Home
