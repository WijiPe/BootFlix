import axios from 'axios';
import { set } from 'mongoose';
import React, { useState, useEffect } from 'react';
import {useParams, useHistory} from "react-router-dom";
import NavBar from '../components/NavBar';
import '../style/moviedetails.css'

const MovieDetails = () => {

    const [movie, setMovie] = useState({})
    const [movieV, setMovieV] = useState([])
    const [loggedinuser, setLoggedInUser] = useState({})
    const [refresh, setRefresh] = useState(true)
    const {id} = useParams()
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
    },[refresh])


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US`)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    }, [id])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US`)
            .then(res => {
                setMovieV(res.data.results[0])
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    }, [id])

    const addToFavorites = () => {
        let newFavorites = [...loggedinuser.favorites]
        let object ={movie_id :id, moviePoster_path:movie.poster_path}
        let found = false
        for(let i=0; i<newFavorites.length; i++){
            if (!newFavorites[i].movie_id===id){
                found = true
            }
        }
        if(found === false){
            newFavorites.push(object)
        }
            axios.put("http://localhost:8000/api/user/update/" + loggedinuser._id, {favorites:newFavorites})
                .then(res => {
                    setRefresh(!refresh)
                    console.log(res.data)
                })
                .catch(err => {
                    console.log("errorrrrrr", err)
                })
    }

    return (
        <div className='row'>
            <NavBar  id={loggedinuser._id} username={loggedinuser.username}/>
            {/* <iframe width="720" height="515" src={`https://www.2embed.ru/embed/tmdb/movie?id=${id}`}></iframe> */}
            <iframe width="720" height="515" className='column left' src={`https://www.youtube.com/embed/${movieV.key}`}></iframe>
                <h2 className='title'>{movie.original_title}</h2>
                <h3 className='coulmn right'>Movie Details</h3>
                <p className='coulmn right'>{movie.overview}</p>
                <h3 className='coulmn right'>Movie Popularity Score:</h3>
                <p className='coulmn right'>{movie.popularity}</p>
                <h3 className='coulmn right'>Movie Release Date:</h3>
                <p className='coulmn right'>{movie.release_date}</p>
                <h3 className='coulmn right'>Vote Average:</h3>
                <p className='coulmn right'>{movie.vote_average}/10</p>
                <button className='icon' onClick={addToFavorites}><i  class="material-icons">star_border</i></button>


        </div>
    )
}


export default MovieDetails
