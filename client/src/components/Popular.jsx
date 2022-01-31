import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../components/style.module.css'

const Popular = () => {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=1")
            .then(res => {
                const tempArray = []
                console.log(res.data.results)
                res.data.results.map((movie, i) => tempArray.push(movie))
                setPopular(tempArray)
                
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    }, [])

    return (
        <div className={styles.catagoryGroup}>
            {
            popular &&
            popular.map((movie, i) => (
                    <div>
                        <h4 key ={i}>{movie.title}</h4>
                    </div>
                )
            )}
        </div>
    )
}

export default Popular
