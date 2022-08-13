import React from 'react'
import {Link} from "react-router-dom"


let Catagories = ["Popular", "My List", "Kids", "Horror"];

const Catagory = (props) => {

    const {findCatagory} = props

    return (
        <div>
            {
                Catagories.map((c, i)=>{ 
                    return (
                        <div key={i} >
                        <Link  to={`/catagory/{c}`} onClick={()=>findCatagory(c)}>   {c}  </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Catagory
