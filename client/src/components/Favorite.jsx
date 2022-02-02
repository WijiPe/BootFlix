import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style/style.module.css'
import {Link, useHistory} from "react-router-dom";
import '../style/scroller.css'

const Favorite = () => {

    const [loggedinuser, setLoggedInUser] = useState({})
    const [favorite, setFavorite] = useState(null)
    const [refresh, setRefresh] = useState(true)
    const history = useHistory()

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
            .then(res => {
                console.log("logged in user info", res)
                setLoggedInUser(res.data)
                setFavorite(res.data.favorites)
            })
            .catch(err => {
                history.push('/')
                console.log("errorrrrrr", err)
            })
    },[refresh])
    

    return  (
        <body>
         
         <div class="wrapper">
             <section id="section13">
                 <a href="#section15" class="arrow__btn">‹</a>
                 <div className={styles.catagoryGroup}>
                     {favorite&&
                     favorite.map((movie, i) => (i < 7 )&&(
                        <div key ={i} >
                        <Link to={`/movie/details/${movie.movie_id}`}><img className='image' src={"https://image.tmdb.org/t/p/w500/"+movie.moviePoster_path} alt="Movie Poster" ></img></Link>
                    </div>
                         )
                     )}
                 </div>
                 <a href="#section14" class="arrow__btn">›</a>
             </section>
             <section id="section14">
                 <a href="#section13" class="arrow__btn">‹</a>
                 <div className={styles.catagoryGroup}>
                     {favorite&&
                     favorite.map((movie, i) => (i > 6 && i < 14 )&&(
                             <div key ={i}>
                                 <Link to={`/movie/details/${movie.movie_id}`}><img  className='image' src={"https://image.tmdb.org/t/p/w500/"+movie.moviePoster_path} alt="Movie Poster" ></img></Link>
                             </div>
                         )
                     )}
                 </div>
                 <a href="#section15" class="arrow__btn">›</a>
             </section>
             <section id="section15">
                 <a href="#section14" class="arrow__btn">‹</a>
                 <div className={styles.catagoryGroup}>
                     {favorite&&
                     favorite.map((movie, i) => ( i > 13 )&&(
                             <div key ={i}>
                                 <Link to={`/movie/details/${movie.movie_id}`}><img  className='image' src={"https://image.tmdb.org/t/p/w500/"+movie.moviePoster_path} alt="Movie Poster" ></img></Link>
                             </div>
                         )
                     )}
                 </div>
                 <a href="#section13" class="arrow__btn">›</a>
             </section>
         </div>
        
        </body>
            )
}

export default Favorite