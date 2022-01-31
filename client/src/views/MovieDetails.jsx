import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import NavLinks from '../components/NavLinks';

const MovieDetails = () => {

    const [movie, setMovie] = useState({})
    const [movieV, setMovieV] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US`)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US`)
            .then(res => {
                setMovieV(res.data.results[0])
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    }, [])


    return (
        <div>
            <NavLinks  />
            <h2>{movie.original_title}</h2>
            <h3>Movie Details</h3>
            <p>{movie.overview}</p>
            {/* <iframe width="720" height="515" src={`https://www.2embed.ru/embed/tmdb/movie?id=${id}`}></iframe> */}
            <iframe width="720" height="515" src={`https://www.youtube.com/embed/${movieV.key}`}></iframe>
        </div>
    )
}

export default MovieDetails
