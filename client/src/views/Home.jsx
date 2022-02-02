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
import actionlogo from '../pngs/action.png';
import popularlogo from '../pngs/popular.png';
import comedylogo from '../pngs/comedy.png';
import horrorlogo from '../pngs/horror.png';
import '../style/logo.css'

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

            <h3><Link to={`/catagory/myList`} className={styles.catagoryName}> Your List </Link></h3>
            <Favorite />
            <h3><Link to={`/catagory/popular`} className={styles.catagoryName}> <img className='logo1' src={popularlogo}></img> </Link></h3>
            <Popular />
            <h3><Link to={`/catagory/action`} className={styles.catagoryName}> <img className='logo1' src={actionlogo}></img></Link></h3>
            <Action />
            <h3><Link to={`/catagory/horror`} className={styles.catagoryName}> <img className='logo1' src={horrorlogo}></img> </Link></h3>
            <Horror  />
            <h3><Link to={`/catagory/comedy`} className={styles.catagoryName}> <img className='logo1' src={comedylogo}></img> </Link></h3>
            <Comedy  />


        </div>
    )
}

export default Home
