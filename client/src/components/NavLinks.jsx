import React from 'react'
import {Link} from "react-router-dom";
import BootFlixLogo from './BootFlixLogo';
import styles from './style.module.css'

const NavLinks = () => {
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
            </div>
        </div>
    )
}

export default NavLinks

