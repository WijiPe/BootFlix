import React from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style/style.module.css'
import {Link} from "react-router-dom";
import '../style/scroller.css'

const Favorite = (props) => {

    const {favorites} = props

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US`)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => {
                console.log("errorrrrrr", err)
            })
    }, [id])

    return (
        <div>
            
        </div>
    )
}

export default Favorite
