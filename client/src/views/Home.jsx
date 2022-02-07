import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style/style.module.css'
import {Link, useHistory} from "react-router-dom";
import Popular from '../components/Popular';
import TestPopular from '../components/TestPopular'
import Action from '../components/Action';
import HorrorPage from '../components/Horror';
import NavBar from '../components/NavBar';
import Comedy from '../components/Comedy';
import Favorite from '../components/Favorite';
import '../style/home.css'
import actionlogo from '../pngs/action1.png';
import popularlogo from '../pngs/popular1.png';
import comedylogo from '../pngs/comedy1.png';
import horrorlogo from '../pngs/horror1.png';
import favoriteslogo from '../pngs/favorites2.png';
import '../style/logo.css'

const Home = () => {
    
    const history = useHistory()
    const [loggedinuser, setLoggedInUser] = useState({})    
    const [favorites, setFavorites] = useState([])   
    const [popularPosters, setPopularPosters] = useState([])

    useEffect(() => {
        // checking to seee if user is logged in, if not redirect to Index.jsx
        axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
            .then(res => {
                console.log("logged in user info", res)
                setLoggedInUser(res.data)
                setFavorites(res.data.favorites)
            })
            .catch(err => {
                history.push('/')
                console.log("errorrrrrr", err)
            })
    }, [])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=1")
            .then(res => {
                const tempArray = []
                console.log(res.data.results)
                res.data.results.map((movie, i) => tempArray.push(movie))
                setPopularPosters(tempArray)
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    }, [])

    return (
        <div className='body'>
            {/* need to pass these two thing to NavBar everytime */}
            <NavBar  id={loggedinuser._id} username={loggedinuser.username}/>

            <h3><Link to={`/catagory/myList`} className={styles.catagoryName}><img className='logo1' src={favoriteslogo}></img></Link></h3>
            <Favorite favorites = {favorites}/>
            <h3><Link to={`/catagory/popular`} className={styles.catagoryName}> <img className='logo1' src={popularlogo}></img> </Link></h3>
            <TestPopular popularPosters = {popularPosters}/>
            <h3><Link to={`/catagory/action`} className={styles.catagoryName}> <img className='logo1' src={actionlogo}></img></Link></h3>
            <Action />
            <h3><Link to={`/catagory/horror`} className={styles.catagoryName}> <img className='logo1' src={horrorlogo}></img> </Link></h3>
            <HorrorPage  />
            <h3><Link to={`/catagory/comedy`} className={styles.catagoryName}> <img className='logo1' src={comedylogo}></img> </Link></h3>
            <Comedy  />


        </div>
    )
}

export default Home
