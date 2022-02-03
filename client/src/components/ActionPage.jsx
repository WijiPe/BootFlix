import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style/style.module.css';
import {Link} from "react-router-dom";
import '../style/scroller.css'


const ActionPage = () => {


    

    const [action1, setAction1] = useState([])
    const [action2, setAction2] = useState([])
    const [action3, setAction3] = useState([])
    // const [page, setPage] = useState(1)

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=1")
            .then(res => {
                const tempArray = []
                res.data.results.map((movie, i) => {
                    if(movie.genre_ids.includes(28)){
                        tempArray.push(movie)
                        }
                    }
                )
                setAction1(tempArray)
            })
            
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    })

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=2")
            .then(res => {
                const tempArray = []
                res.data.results.map((movie, i) => {
                    if(movie.genre_ids.includes(28)){
                        tempArray.push(movie)
                        }
                    }
                )
                setAction2(tempArray)
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    })

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=3")
            .then(res => {
                const tempArray = []
                res.data.results.map((movie, i) => {
                    if(movie.genre_ids.includes(28)){
                        tempArray.push(movie)
                        }
                    }
                )
                setAction3(tempArray)
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
                     action1 &&
                     action1.map((movie, i) => (i < 7 )&&(
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
                     action2 &&
                     action2.map((movie, i) => (i < 7 )&&(
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
                     action3 &&
                     action3.map((movie, i) => ( i < 7 )&&(
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


export default ActionPage






// return (
    
//     <div>
//         <button onClick={e=>setPage(1)}>1</button>
//         <button onClick={e=>setPage(2)}>2</button>
//         <button onClick={e=>setPage(3)}>3</button>
//         <button onClick={e=>setPage(4)}>4</button>
//         <button onClick={e=>setPage(5)}>5</button>
//         <button onClick={e=>setPage(6)}>6</button>
//         <button onClick={e=>setPage(7)}>7</button>
//         <button onClick={e=>setPage(8)}>8</button>
//         <button onClick={e=>setPage(9)}>9</button>
//         <button onClick={e=>setPage(10)}>10</button>

//         <div>
//         {
//         action && 
//         action.map((movie, i) => (
            
//                 <div key ={i} >
//                     <Link to={`/movie/details/${movie.id}`}><img className={styles.image} src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} alt="Movie Poster" ></img></Link>
//                 </div>
                
//             )
//         )}
//         </div>
//     </div>
// )