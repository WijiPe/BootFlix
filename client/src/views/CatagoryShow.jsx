import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Action from '../components/Action';
import Horror from '../components/Horror';
import Comedy from '../components/Comedy';
import {useParams, useHistory} from "react-router-dom";
import Popular from '../components/Popular';
import Favorite from '../components/Favorite';



const CatagoryShow = () => {
    
    const history = useHistory()
    const [favorites, setFavorites] = useState([])
    const [loggedinuser, setLoggedInUser] = useState({})
    const {catagory} = useParams()
    const [popularMovies, setPopularMovies] = useState([])


    useEffect(() => {
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
            {catagory === "popular" && <Popular popularMovies = {popularMovies}/>}
            {catagory === "action" && <Action />}
            {catagory === "horror" && <Horror />}
            {catagory === "comedy" && <Comedy />}
            {catagory === "myList" && <Favorite favorites = {favorites}/>}

        </div>
    )
}

export default CatagoryShow
