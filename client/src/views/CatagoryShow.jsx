import React from 'react'
import NavLinks from '../components/NavLinks'
import Popular from '../components/Popular'
// import Catagory from '../components/Catagory'

const CatagoryShow = () => {

    // const [catagory, setCatagory] = useState("")

    // const findCatagory =(newCatagory) =>{
    //     setCatagory(newCatagory)
    // }


    return (
        <div>
            <NavLinks />
            <Popular />
            {/* <h3><Catagory findCatagory={findCatagory} /></h3> */}
        </div>
    )
}

export default CatagoryShow
