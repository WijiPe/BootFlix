import axios from 'axios';
import {useParams, useHistory} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import '../style/moviedetails.css'


const MovieDetails = () => {

    const [movie, setMovie] = useState({})
    const [movieV, setMovieV] = useState([])
    const [myList, setMyList] = useState(true)
    const [myList2, setMyList2] = useState(false)
    const [favoriteMovieId, setFavoriteMovieId] = useState(null)
    const [loggedinuser, setLoggedInUser] = useState({})
    const [refresh, setRefresh] = useState(true)
    const {id} = useParams()
    const history = useHistory()

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
            .then(res => {
                console.log("logged in user info", res)
                setLoggedInUser(res.data)
                let MovieId = res.data.favorites
                for(let i=0; i<MovieId.length; i++){
                    if(MovieId[i].movie_id===id){
                        setFavoriteMovieId(MovieId[i].movie_id)
                    }
                }
            }
        ) 
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
            if (newFavorites[i].movie_id===id){
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

    const deleteFromFavorites =() =>{
        let newFavorites = [...loggedinuser.favorites]
        for(let i=0; i<newFavorites.length; i++){
            if (newFavorites[i].movie_id===id){
                newFavorites.splice(i,1)
            }
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

    const check =()=>{
        setMyList(!myList)
        if(myList === true){
            deleteFromFavorites()
            
        }else{
            addToFavorites()
        }
    }

    const check2 =()=>{
        setMyList2(!myList)
        if(myList === false){
            deleteFromFavorites()
            
        }else{
            addToFavorites()
        }
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

                <label>Add to My List</label>
                {/* {
                favoriteMovieId === id? <input type="checkbox" checked={myList} onClick = {check} />
                :<input type="checkbox" checked={myList2} onClick = {check2} />
                } */}
                {
                favoriteMovieId === id ? <Checkbox color="error" checked={myList} onClick = {check} icon={<FavoriteBorder color="error"/>} checkedIcon={<Favorite />} />
                :<Checkbox  color="error" checked={myList2} onClick = {check2} icon={<FavoriteBorder color="error"/>} checkedIcon={<Favorite />} />    
                }
                
            
                


        </div>
    )
}


export default MovieDetails