import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../components/style.module.css'

const Latest = () => {

    const [latest, setLatest] = useState([])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=1")
            .then(res => {
                const tempArray = []
                console.log(res.data.results)
                res.data.results.map((movie, i) => tempArray.push(movie))
                setLatest(tempArray)
                
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    }, [])

    return (
        <div className={styles.catagoryGroup}>
            {
            latest && 
            latest.map((movie, i) => (
                
                    <div>
                        <img key ={i} className={styles.image} src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} alt="Movie Poster" ></img>
                    </div>
                    
                )
            )}
        </div>
    )
}

export default Latest