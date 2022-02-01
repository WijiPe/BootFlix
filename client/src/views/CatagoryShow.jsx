import React from 'react'
import NavLinks from '../components/NavLinks'
import ActionPage from '../components/ActionPage';
import HorrorPage from '../components/HorrorPage';
import {useParams} from "react-router-dom";
import PopularPage from '../components/PopularPage';


const CatagoryShow = () => {


    const {catagory} = useParams()


    return (
        <div>
            <NavLinks />
            {catagory === "popular" && <PopularPage />}
            {catagory === "action" && <ActionPage />}
            {catagory === "horror" && <HorrorPage />}


        </div>
    )
}

export default CatagoryShow
