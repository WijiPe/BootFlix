import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style/style.module.css'
import {Link, useHistory} from "react-router-dom";
import Popular from '../components/Popular';
import Action from '../components/Action';
import Horror from '../components/Horror';
import NavBar from '../components/NavBar';
import Comedy from '../components/Comedy';
import Favorite from '../components/Favorite';
import '../style/home.css'

const Home = () => {
    
    const history = useHistory()
    const [loggedinuser, setLoggedInUser] = useState({})    

    useEffect(() => {
        // checking to seee if user is logged in, if not redirect to Index.jsx
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
            {/* need to pass these two thing to NavBar everytime */}
            <NavBar  id={loggedinuser._id} username={loggedinuser.username}/>

            <h3><Link to={`/catagory/popular`} className={styles.catagoryName}> Popular </Link></h3>
            <Popular />
            <h3><Link to={`/catagory/action`} className={styles.catagoryName}> Action </Link></h3>
            <Action />
            <h3><Link to={`/catagory/horror`} className={styles.catagoryName}> Horror </Link></h3>
            <Horror  />
            <h3><Link to={`/catagory/comedy`} className={styles.catagoryName}> Comedy </Link></h3>
            <Comedy  />
            <h3><Link to={`/catagory/favorite`} className={styles.catagoryName}> Comedy </Link></h3>
            <Favorite favorites={loggedinuser.favorites} />

        </div>
    )
}

export default Home
