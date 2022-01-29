import React from 'react'
import {Link, useHistory} from "react-router-dom";
import BootFlixLogo from './BootFlixLogo';
import styles from './style.module.css'

const NavLinks = () => {

    const history = useHistory();

    const onChangeHandler=(e) =>{
        e.preventDefault()
        history.push(e.target.value)
    }

    return (
        <div>
            <div className={styles.nav}>
                <BootFlixLogo />
                <div className={styles.navLink}>
                    <Link to={"/home"}>Home</Link>
                    <Link to={"/home"}>Movies</Link>
                    <Link to={"/home"}>Popular</Link>
                    <Link to={"/home"}>My List</Link>
                    <Link to={"/home"}>Kids</Link>
                </div>
                <div>
                    <select type = "text" onChange={(e)=>onChangeHandler(e.target.value)}>
                        <option value="">User</option>
                        <option value="/edit/user/:id">Edit</option>
                        <option value="">Log Out</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default NavLinks

