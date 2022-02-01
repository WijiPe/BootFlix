import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style/style.module.css'
import {Link} from "react-router-dom";

const Horror = () => {

    const [horror, setHorror] = useState([])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=2")
            .then(res => {
                const tempArray = []
                res.data.results.map((movie, i) => {
                    if(movie.genre_ids.includes(27)){
                        tempArray.push(movie)
                        }
                    }
                )
                setHorror(tempArray)
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    }, [])

    return (
        <div className={styles.catagoryGroup}>
            {
            horror && 
            horror.map((movie, i) => (
                
                    <div key ={i} >
                        <Link to={`/movie/details/${movie.id}`}><img className={styles.image} src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} alt="Movie Poster" ></img></Link>
                    </div>
                    
                )
            )}
        </div>
    )
}

export default Horror

