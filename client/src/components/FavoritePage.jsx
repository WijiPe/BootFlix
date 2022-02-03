import React from 'react';
import styles from '../style/style.module.css';
import {Link} from "react-router-dom";

import '../style/scroller.css'


const FavoritePage = (props) => {

    const {favorites} = props

    return  (
        <body>
         
         <div class="wrapper">
             <section className='favoritepage' id="section13"> 
                 <a href="#section15" class="arrow__btn">‹</a>
                 <div className={styles.catagoryGroup}>
                     {favorites&&
                     favorites.map((movie, i) => (i < 7 )&&(
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
                     {favorites&&
                     favorites.map((movie, i) => (i > 6 && i < 14 )&&(
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
                     {favorites&&
                     favorites.map((movie, i) => ( i > 13 )&&(
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



