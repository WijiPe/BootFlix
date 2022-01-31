import NavLinks from '../components/NavLinks'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

    const [loggedinuser, setLoggedInUser] = useState({})
    const [popular, setPopular] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
            .then(res => {
                console.log("logged in user info", res)
                setLoggedInUser(res)
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    }, [])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=1")
            .then(res => {
                const tempArray = []
                console.log(res.data.results)
                res.data.results.map((movie, i) => tempArray.push(movie))
                setPopular(tempArray)
                
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    }, [])

    return (
        <div>
            <NavLinks />
            <h1>Welcome, {loggedinuser.username} {popular.poster_path}</h1>
            <img src= {`static:/${popular.poster_path}`} alt="Poster" />
            <p>{popular.title}</p>


            {
            popular &&
            popular.map((movie, i) => {
                return (
                    <h1 key ={i}>{movie.title}</h1>
                )
            })

            }
        </div>
    )
}

export default Home
