import NavLinks from '../components/NavLinks'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style/style.module.css'
import {Link, useHistory} from "react-router-dom";
import Popular from '../components/Popular';
import Action from '../components/Action';
import Horror from '../components/Horror';
import '../style/home.css'


const Home = () => {
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
        <div className='body'>
            <NavLinks id={loggedinuser._id}/>
            <h1>Welcome, {loggedinuser.username}</h1>

            <h3><Link to={`/catagory/popular`} className={styles.catagoryName}> Popular </Link></h3>
            <Popular />
            <h3><Link to={`/catagory/action`} className={styles.catagoryName}> Action </Link></h3>
            <Action />
            <h3><Link to={`/catagory/horror`} className={styles.catagoryName}> Horror </Link></h3>
            <Horror  />
        </div>
    )
}

export default Home
