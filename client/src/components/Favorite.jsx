import React, { useRef } from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/scroller.css'
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";


export default (props) => {
    const {favorites} = props
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
        
                {favorites&& 
            <Slider ref={(c) => (slider.current = c)} {...settings}>
                {favorites.map(function (movie, i) {
                    console.log(movie.movie_id)
                    return (
                        <div key={i}>
                            <Link to={`/movie/details/${movie.movie_id}`}>
                                <img className="image zoom" alt="no" src={"https://image.tmdb.org/t/p/w500/" + movie.moviePoster_path} />
                            </Link>
                        </div>
                    );
                })}
            </Slider>
}
        </div >
    );
}