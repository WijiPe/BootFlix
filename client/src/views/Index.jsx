import React from 'react';
import BootFlixLogo from '../components/BootFlixLogo';
import {useHistory} from "react-router-dom";

const Index = () => {

    
    const history = useHistory();

    const onChangeHandler=(e) =>{
        e.preventDefault()
        history.push(e.target.value)
    }

    return (
        <div>
            <BootFlixLogo  />
            <div>
                    <select type = "text" onChange={(e)=>onChangeHandler(e)}>
                        <option value=""></option>
                        <option value="/signup">Sign Up</option>
                        <option value="/login">Log In</option>
                        
                    </select>
                </div>
        </div>
    )
}

export default Index
