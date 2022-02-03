import React, { useState} from 'react';
import {Link} from "react-router-dom";
import NavBar from '../components/NavBar';
import styles from '../style/style.module.css'
import axios from 'axios';

const Search = () => {

    const [movies, setMovies] = useState([])
    const [searchResult, setSearchResult] = useState("")


    const changeHandler=(e) => {
        e.preventDefault();
        setSearchResult(e.target.value)
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&query='+e.target.value+'&page=1&include_adult=false')
            .then(res => {
                const tempArray = []
                console.log(res.data.results)
                res.data.results.map((movie, i) => tempArray.push(movie))
                setMovies(tempArray)
                

            })
    }

    return ( 
            
    <body>
        <NavBar  />
        <div >
            <input type="text" placeholder="Search Movies" value={searchResult} onChange={(e)=>changeHandler(e)} />
        </div>  

    <div class="wrapper">
        <section id="section1">
            <a href="#section3" class="arrow__btn">‹</a>
            <div className={styles.catagoryGroup}>
                {
                    movies &&
                    movies.map((movie, i) => (i < 7) && (
                        <div key={i}>
                            <Link to={`/movie/details/${movie.id}`}><img className='image zoom' src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="Movie Poster" ></img></Link>
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
                    movies &&
                    movies.map((movie, i) => (i > 6 && i < 14) && (
                        <div key={i}>
                            <Link to={`/movie/details/${movie.id}`}><img className='image zoom' src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="Movie Poster" ></img></Link>
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
                    movies &&
                    movies.map((movie, i) => (i > 13) && (
                        <div key={i}>
                            <Link to={`/movie/details/${movie.id}`}><img className='image zoom' src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="Movie Poster" ></img></Link>
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

export default Search
