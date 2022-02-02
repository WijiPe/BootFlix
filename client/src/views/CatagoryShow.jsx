import React from 'react'
import NavBar from '../components/NavBar';
import ActionPage from '../components/ActionPage';
import HorrorPage from '../components/HorrorPage';
import {useParams} from "react-router-dom";
import PopularPage from '../components/PopularPage';


const CatagoryShow = () => {


    const {catagory} = useParams()


    return (
        <div>
            <NavBar />
            {catagory === "popular" && <PopularPage />}
            {catagory === "action" && <ActionPage />}
            {catagory === "horror" && <HorrorPage />}


        </div>
    )
}

export default CatagoryShow
