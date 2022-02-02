import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style/style.module.css';
import {Link} from "react-router-dom";

const ActionPage = () => {

    const [action, setAction] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page="+page)
            .then(res => {
                const tempArray = []
                res.data.results.map((movie, i) => {
                    if(movie.genre_ids.includes(28)){
                        tempArray.push(movie)
                        }
                    }
                )
                setAction(tempArray)
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    })

    return (
    
        <div>
            <button onClick={e=>setPage(1)}>1</button>
            <button onClick={e=>setPage(2)}>2</button>
            <button onClick={e=>setPage(3)}>3</button>
            <button onClick={e=>setPage(4)}>4</button>
            <button onClick={e=>setPage(5)}>5</button>
            <button onClick={e=>setPage(6)}>6</button>
            <button onClick={e=>setPage(7)}>7</button>
            <button onClick={e=>setPage(8)}>8</button>
            <button onClick={e=>setPage(9)}>9</button>
            <button onClick={e=>setPage(10)}>10</button>

            <div>
            {
            action && 
            action.map((movie, i) => (
                
                    <div key ={i} >
                        <Link to={`/movie/details/${movie.id}`}><img className={styles.image} src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} alt="Movie Poster" ></img></Link>
                    </div>
                    
                )
            )}
            </div>
        </div>
    )
}


export default ActionPage
