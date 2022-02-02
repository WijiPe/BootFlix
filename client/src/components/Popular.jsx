import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style/style.module.css'
import { Link } from "react-router-dom";
import '../style/scroller.css'
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
        <body>

            <div class="wrapper">
                <section id="section1">
                    <a href="#section3" class="arrow__btn">‹</a>
                    <div className={styles.catagoryGroup}>
                        {
                            popular &&
                            popular.map((movie, i) => (i < 7) && (
                                <div key={i}>
                                    <Link to={`/movie/details/${movie.id}`}><img className='image' src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="Movie Poster" ></img></Link>
                                </div>
                            )
                            )}
                    </div>
                    <a href="#section2" class="arrow__btn">›</a>
                </section>
                <section id="section2">
                    <a href="#section1" class="arrow__btn">‹</a>
                    <div className={styles.catagoryGroup}>
                        {
                            popular &&
                            popular.map((movie, i) => (i > 6 && i < 14) && (
                                <div key={i}>
                                    <Link to={`/movie/details/${movie.id}`}><img className='image' src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="Movie Poster" ></img></Link>
                                </div>
                            )
                            )}
                    </div>
                    <a href="#section3" class="arrow__btn">›</a>
                </section>
                <section id="section3">
                    <a href="#section2" class="arrow__btn">‹</a>
                    <div className={styles.catagoryGroup}>
                        {
                            popular &&
                            popular.map((movie, i) => (i > 13) && (
                                <div key={i}>
                                    <Link to={`/movie/details/${movie.id}`}><img className='image' src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="Movie Poster" ></img></Link>
                                </div>
                            )
                            )}
                    </div>
                    <a href="#section1" class="arrow__btn">›</a>
                </section>
            </div>

        </body>
    )
}

export default Popular;





