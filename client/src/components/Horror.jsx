import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style/style.module.css'
import {Link} from "react-router-dom";
import '../style/scroller.css'

const Horror = () => {

    const [horror, setHorror] = useState([])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=30")
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
        <body>
         
         <div class="wrapper maintop">
             <section id="section10">
                 <a href="#section12" class="arrow__btn">‹</a>
                 <div className={styles.catagoryGroup}>
                     {
                     horror &&
                     horror.map((movie, i) => (i < 7 )&&(
                        <div key ={i} >
                        <Link to={`/movie/details/${movie.id}`}><img className='image zoom' src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} alt="Movie Poster" ></img></Link>
                    </div>
                         )
                     )}
                 </div>
                 <a href="#section11" class="arrow__btn">›</a>
             </section>
             <section id="section11">
                 <a href="#section10" class="arrow__btn">‹</a>
                 <div className={styles.catagoryGroup}>
                     {
                     horror &&
                     horror.map((movie, i) => (i > 6 && i < 14 )&&(
                             <div key ={i}>
                                 <Link to={`/movie/details/${movie.id}`}><img  className='image zoom' src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} alt="Movie Poster" ></img></Link>
                             </div>
                         )
                     )}
                 </div>
                 <a href="#section12" class="arrow__btn">›</a>
             </section>
             <section id="section12">
                 <a href="#section11" class="arrow__btn">‹</a>
                 <div className={styles.catagoryGroup}>
                     {
                     horror &&
                     horror.map((movie, i) => ( i > 13 )&&(
                             <div key ={i}>
                                 <Link to={`/movie/details/${movie.id}`}><img  className='image zoom' src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} alt="Movie Poster" ></img></Link>
                             </div>
                         )
                     )}
                 </div>
                 <a href="#section10" class="arrow__btn">›</a>
             </section>
         </div>
        
        </body>
            )
}

export default Horror

