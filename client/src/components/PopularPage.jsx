import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style/style.module.css';
import {Link} from "react-router-dom";
import '../style/scroller.css'


const PopularPage = () => {


    

    const [popular1, setPopular1] = useState([])
    const [popular2, setPopular2] = useState([])
    const [popular3, setPopular3] = useState([])
    // const [page, setPage] = useState(1)

    useEffect(() => {

        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=1")
            .then(res => {
                const tempArray = []
                console.log(res.data.results)
                res.data.results.map((movie, i) => tempArray.push(movie))
                setPopular1(tempArray)
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    })

    useEffect(() => {

        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=1")
            .then(res => {
                const tempArray = []
                console.log(res.data.results)
                res.data.results.map((movie, i) => tempArray.push(movie))
                setPopular2(tempArray)
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    })

    useEffect(() => {

        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=1")
            .then(res => {
                const tempArray = []
                console.log(res.data.results)
                res.data.results.map((movie, i) => tempArray.push(movie))
                setPopular3(tempArray)
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    })
    return (
        <body>
         
         <div class="wrapper">
             <section className='top' id="section24">
                 <a href="#section26" class="arrow__btn">‹</a>
                 <div className={styles.catagoryGroup}>
                     {
                     popular1 &&
                     popular1.map((movie, i) => (i < 7 )&&(
                        <div key ={i} >
                        <Link to={`/movie/details/${movie.id}`}><img className='image zoom top' src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} alt="Movie Poster" ></img></Link>
                    </div>
                         )
                     )}
                 </div>
                 <a href="#section25" class="arrow__btn">›</a>
             </section>
             <section className='top' id="section25">
                 <a href="#section24" class="arrow__btn">‹</a>
                 <div className={styles.catagoryGroup}>
                     {
                     popular2 &&
                     popular2.map((movie, i) => (i < 7 )&&(
                             <div key ={i}>
                                 <Link to={`/movie/details/${movie.id}`}><img  className='image zoom top' src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} alt="Movie Poster" ></img></Link>
                             </div>
                         )
                     )}
                 </div>
                 <a href="#section26" class="arrow__btn">›</a>
             </section>
             <section className='top' id="section26">
                 <a href="#section25" class="arrow__btn">‹</a>
                 <div className={styles.catagoryGroup}>
                     {
                     popular3 &&
                     popular3.map((movie, i) => ( i < 7 )&&(
                             <div key ={i}>
                                 <Link to={`/movie/details/${movie.id}`}><img  className='image zoom top' src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} alt="Movie Poster" ></img></Link>
                             </div>
                         )
                     )}
                 </div>
                 <a href="#section24" class="arrow__btn">›</a>
             </section>
         </div>
        
        </body>
            )

}


export default PopularPage

//27

// 6 31