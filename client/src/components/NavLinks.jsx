import React from 'react'
import {Link, useHistory} from "react-router-dom";
import BootFlixLogo from './BootFlixLogo';
import styles from '../style/style.module.css'
import axios from 'axios';

const NavLinks = (props) => {

    const history = useHistory();

    const onChangeHandler=(e) =>{
        e.preventDefault()
        console.log(e.target.value)
        if(e.target.value === ''){
            return console.log('nothing')}
        if (e.target.value === "logout"){
            axios.post("http://localhost:8000/api/user/logout")
                .then (res => {
                    console.log(res.json)
                    history.push('/')
                })
                .catch (err =>{
                    console.log(err)
                })}
        else{
            history.push(e.target.value)
        }
    }

    return (
        <div></div>
    )
}

export default NavLinks


        // <div>
        //     <div className={styles.nav}>
        //         <BootFlixLogo />
        //         <div className={styles.navLink}>
        //             <Link to={"/home"}><i className='material-icons'>home</i></Link>
        //             <Link to={"/home"}><i className='material-icons'>movie</i></Link>
        //             <Link to={"/catagory/popular"}><i className='material-icons'>star_rate</i></Link>
        //             <Link to={"/home"}><i className='material-icons'>list</i></Link>
        //             <Link to={"/home"}><i className='material-icons'>child_care</i></Link>
                    
        //         </div>
        //         <div>
        //             <select type = "text" onChange={(e)=>onChangeHandler(e)}>
        //                 <option type= "hidden" value="">User</option>
        //                 <option value={"/edit/user/" + props.id}>Edit</option>
        //                 <option value="logout">Log Out</option>
        //             </select>
        //         </div>
        //     </div>
        // </div>
