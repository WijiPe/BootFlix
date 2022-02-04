import React, { useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import NavBar from '../components/NavBar';
import styles from '../style/style.module.css'
import "../style/Search.css"
import '../style/scroller.css'
import axios from 'axios';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search'; 

const Search = () => {

    const [movies, setMovies] = useState([])
    const [searchResult, setSearchResult] = useState("")
    const history = useHistory()
    const [loggedinuser, setLoggedInUser] = useState({}) 

    useEffect(() => {
        // checking to seee if user is logged in, if not redirect to Index.jsx
        axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
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
    <div className="bodybody">

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

    <div class="wrapper margin-left">
        <section id="section1">
            <a href="#section3" class="arrow__btn">‹</a>
            <div className={styles.catagoryGroup}>
                {
                    movies &&
                    movies.map((movie, i) => (i < 7) && (
                        <div key={i}>
                            <Link to={`/movie/details/${movie.id}`}><img className='image zoom' src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="" ></img></Link>
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
                            <Link to={`/movie/details/${movie.id}`}><img className='image zoom' src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="" ></img></Link>
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
                            <Link to={`/movie/details/${movie.id}`}><img className='image zoom' src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="" ></img></Link>
                        </div>
                    )
                    )}
            </div>
            <a href="#section1" class="arrow__btn">›</a>
        </section>
    </div>
</div>
    </body>
    )
}

export default Search
