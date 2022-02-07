import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/scroller.css'
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";


export default (props) => {

    const [comedyMovies, setComedyMovies] = useState([])

    useEffect(() => {
        const tempArray = []
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=1")
            .then(res => {
                res.data.results.map((movie, i) => {
                    if(movie.genre_ids.includes(35)){
                        tempArray.push(movie)
                        }
                    }
                )
            })
            
            .catch(err => {
                console.log("errorrrrrr", err)
            })

        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=2")
            .then(res => {
                res.data.results.map((movie, i) => {
                    if(movie.genre_ids.includes(35)){
                        tempArray.push(movie)
                        }
                    }
                )
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })

        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=3")
            .then(res => {
                res.data.results.map((movie, i) => {
                    if(movie.genre_ids.includes(35)){
                        tempArray.push(movie)
                        }
                    }
                )
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
        setComedyMovies(tempArray)
    }, [])
    const slider = useRef()
    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        leftArrow: <ArrowLeft onClick={previous}/>,
        rightArrow: <ArrowRight onClick={next}/>
    };

    return (
        <div className='size'>
            <Slider ref={(c) => (slider.current = c)} {...settings}>
                {comedyMovies.map(function (movie, i) {
                    return (
                        <div key={i}>
                            <Link to={`/movie/details/${movie.id}`}>
                                <img className="image zoom" alt="no" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />
                            </Link>
                        </div>
                    );
                })}
            </Slider>
        </div >
    );
}


