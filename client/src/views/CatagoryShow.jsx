import React from 'react'
import NavLinks from '../components/NavLinks'
import Popular from '../components/Popular'
import Action from '../components/Action';
import {useParams} from "react-router-dom";
// import Catagory from '../components/Catagory'

const CatagoryShow = () => {

    // const [catagory, setCatagory] = useState("")
    const {catagory} = useParams()

    // const findCatagory =(newCatagory) =>{
    //     setCatagory(newCatagory)
    // }


    return (
        <div>
            <NavLinks />
            {catagory === "popular" && <Popular />}
            {catagory === "action" && <Action />}

            {/* <h3><Catagory findCatagory={findCatagory} /></h3> */}
        </div>
    )
}

export default CatagoryShow
