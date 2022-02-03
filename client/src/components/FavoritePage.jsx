import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style/style.module.css';
import {Link, useHistory} from "react-router-dom";

import '../style/scroller.css'


const FavoritePage = () => {


    
    const [loggedinuser, setLoggedInUser] = useState({})
    const [refresh, setRefresh] = useState(true)
    const history = useHistory()
    const [favorite1, setFavorite1] = useState([])
    const [favorite2, setFavorite2] = useState([])
    const [favorite3, setFavorite3] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
            .then(res => {
                console.log("logged in user info", res)
                setLoggedInUser(res.data)
                setFavorite1(res.data.favorites)
            })
            .catch(err => {
                history.push('/')
                console.log("errorrrrrr", err)
            })
    },[refresh])

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
            .then(res => {
                console.log("logged in user info", res)
                setLoggedInUser(res.data)
                setFavorite2(res.data.favorites)
            })
            .catch(err => {
                history.push('/')
                console.log("errorrrrrr", err)
            })
    },[refresh])
    useEffect(() => {
        axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
            .then(res => {
                console.log("logged in user info", res)
                setLoggedInUser(res.data)
                setFavorite3(res.data.favorites)
            })
            .catch(err => {
                history.push('/')
                console.log("errorrrrrr", err)
            })
    },[refresh])
    return  (
        <body>
         
         <div class="wrapper maintop favoritepage">
             <section className='favoritepage' id="section13"> 
                 <a href="#section15" class="arrow__btn">‹</a>
                 <div className={styles.catagoryGroup}>
                     {favorite1&&
                     favorite1.map((movie, i) => (i < 7 )&&(
                        <div key ={i} >
                        <Link to={`/movie/details/${movie.movie_id}`}><img className='image zoom top' src={"https://image.tmdb.org/t/p/w500/"+movie.moviePoster_path} alt="Movie Poster" ></img></Link>
                    </div>
                         )
                     )}
                 </div>
                 <a href="#section14" class="arrow__btn">›</a>
             </section>
             <section className='favoritepage' id="section14">
                 <a href="#section13" class="arrow__btn">‹</a>
                 <div className={styles.catagoryGroup}>
                     {favorite2&&
                     favorite2.map((movie, i) => (i > 6 && i < 14 )&&(
                             <div key ={i}>
                                 <Link to={`/movie/details/${movie.movie_id}`}><img  className='image zoom top' src={"https://image.tmdb.org/t/p/w500/"+movie.moviePoster_path} alt="Movie Poster" ></img></Link>
                             </div>
                         )
                     )}
                 </div>
                 <a href="#section15" class="arrow__btn">›</a>
             </section>
             <section className='favoritepage' id="section15">
                 <a href="#section14" class="arrow__btn">‹</a>
                 <div className={styles.catagoryGroup}>
                     {favorite3&&
                     favorite3.map((movie, i) => ( i > 13 )&&(
                             <div key ={i}>
                                 <Link to={`/movie/details/${movie.movie_id}`}><img  className='image zoom top' src={"https://image.tmdb.org/t/p/w500/"+movie.moviePoster_path} alt="Movie Poster" ></img></Link>
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


export default FavoritePage



