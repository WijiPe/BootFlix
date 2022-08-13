import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Action from '../components/Action';
import Horror from '../components/Horror';
import Comedy from '../components/Comedy';
import {useParams, useHistory} from "react-router-dom";
import Popular from '../components/Popular';
import Favorite from '../components/Favorite';
import Categorypages from '../components/Categorypages';
import popularlogo from '../pngs/popular1.png';
import comedylogo from '../pngs/comedy1.png';
import horrorlogo from '../pngs/horror1.png';
import favoriteslogo from '../pngs/favorites2.png';
import actionlogo from '../pngs/action1.png';
import '../style/logo.css'



const CatagoryShow = () => {
    
    const history = useHistory()
    const [favorites, setFavorites] = useState([])
    const [loggedinuser, setLoggedInUser] = useState({})
    const {catagory} = useParams()
    const [popularMovies, setPopularMovies] = useState([])


    useEffect(() => {
        axios.get("/api/users/getloggedinuser", { withCredentials: true })
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
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=2")
            .then(res => {
                const tempArray = []
                console.log(res.data.results)
                res.data.results.map((movie, i) => tempArray.push(movie))
                setPopularMovies(tempArray)
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    }, [])


    return (
        <div>
            <NavBar id={loggedinuser._id} username={loggedinuser.username}/>
            {catagory === "popular" &&  <div> < Categorypages title = {<img className='logo1' src={popularlogo}></img>} /><Popular popularMovies = {popularMovies}/></div>}
            {catagory === "action" && <div> < Categorypages title = {<img className='logo1' src={actionlogo}></img>} />  <Action /> </div>}
            {catagory === "horror" && <div> < Categorypages title = {<img className='logo1' src={horrorlogo}></img>} />  <Horror /> </div>}
            {catagory === "comedy" &&   <div> < Categorypages title = {<img className='logo1' src={comedylogo}></img>} />  <Comedy /> </div>}
            {catagory === "myList" &&   <div> < Categorypages title = {<img className='logo1' src={favoriteslogo}></img>} /> <Favorite favorites = {favorites}/></div>}

        </div>
    )
}

export default CatagoryShow
