import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style/style.module.css';
import {Link} from "react-router-dom";
import '../style/scroller.css'


const HorrorPage = () => {


    

    const [horror1, setHorror1] = useState([])
    const [horror2, setHorror2] = useState([])
    const [horror3, setHorror3] = useState([])
    // const [page, setPage] = useState(1)

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
                setHorror1(tempArray)
            })
            
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    })

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=40")
            .then(res => {
                const tempArray = []
                res.data.results.map((movie, i) => {
                    if(movie.genre_ids.includes(27)){
                        tempArray.push(movie)
                        }
                    }
                )
                setHorror2(tempArray)
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    })

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=6")
            .then(res => {
                const tempArray = []
                res.data.results.map((movie, i) => {
                    if(movie.genre_ids.includes(27)){
                        tempArray.push(movie)
                        }
                    }
                )
                setHorror3(tempArray)
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
                     horror1 &&
                     horror1.map((movie, i) => (i < 7 )&&(
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
                     horror2 &&
                     horror2.map((movie, i) => (i < 7 )&&(
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
                     horror3 &&
                     horror3.map((movie, i) => ( i < 7 )&&(
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


export default HorrorPage

//27

// 6 31