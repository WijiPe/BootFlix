
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../style/scroller.css'

const Favorite = (props) => {

    const [movie, setMovie] = useState("")

    const getMovieInfo = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US`)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    }

    useEffect(() => {
        let favorites = props.favorites
        let movies = []
        for (let i = 0; i <favorites.length; i++){
            getMovieInfo(favorites[i])
            console.log(movie)
        }
    },[])

    return (
        <div>
            {
                favorites &&
                favorites.map((fav, i) => {
                    return(
                    <div key = {i}>
                    <Link to={`/movie/details/${movie.id}`}><img className='image' src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="Movie Poster" ></img></Link>
                    </div>
                    )
            })

            }
        </div >
    )
}

export default Favorite
