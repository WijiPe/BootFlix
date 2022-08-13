import React, { useState, useEffect, useRef} from 'react';
import {Link, useHistory} from "react-router-dom";
import NavBar from '../components/NavBar';
import styles from '../style/style.module.css'
import "../style/Search.css"
import '../style/scroller.css'
import axios from 'axios';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/scroller.css'
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from "@mui/icons-material/ArrowRight";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search'; 

const Search = () => {
    // const {search} = props

    const [movies, setMovies] = useState([])
    const [searchResult, setSearchResult] = useState("")
    const history = useHistory()
    const [loggedinuser, setLoggedInUser] = useState({})

    const slider = useRef()
    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };

    // let newSlides
    // if (search.length < 6){
    //     newSlides = search.length;
    // }else {
    //     newSlides = 6;
    // }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        leftArrow: <ArrowLeft onClick={previous}/>,
        rightArrow: <ArrowRight onClick={next}/>
    };

    useEffect(() => {
        // checking to seee if user is logged in, if not redirect to Index.jsx
        axios.get("/api/users/getloggedinuser", { withCredentials: true })
            .then(res => {
                console.log("logged in user info", res)
                setLoggedInUser(res.data)
            })
            .catch(err => {
                history.push('/')
                console.log("errorrrrrr", err)
            })
    }, [])

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
            
    <body >
        <NavBar  id={loggedinuser._id} username={loggedinuser.username}/>
        {/* <div>
            <input type="text" placeholder="Search Movies" value={searchResult} onChange={(e)=>changeHandler(e)} />
        </div>   */}

    <Paper
        className='search'
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
        <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Movies"
        inputProps={{ 'aria-label': 'Search Movies' }}
        value={searchResult}
        onChange={(e)=>changeHandler(e)}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>
    </Paper>

    <div className='size'>
            <Slider ref={(c) => (slider.current = c)} {...settings}>
                {movies.map(function (movie, i) {
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
    </body>
    )
}

export default Search
