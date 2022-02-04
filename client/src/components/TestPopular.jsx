import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const TestPopular = () => {

    const [popular, setPopular] = useState([])

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

    }
    export default TestPopular