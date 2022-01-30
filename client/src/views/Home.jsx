import NavLinks from '../components/NavLinks'
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => {

      const [loggedinuser, setLoggedInUser] = useState({})


    useEffect(()=>{
        axios.get("http://localhost:8000/api/users/getloggedinuser", {withCredentials:true})
            .then(res=>{
                console.log("logged in user info", res)
                setLoggedInUser(res.data)
            })
            .catch(err=> {
                console.log("errorrrrrr",err)
            })
    }, [])

  return (
    <div>
        <NavLinks  />
        <h1>Welcome, {loggedinuser.username}</h1>
    </div>
  )
}

export default Home
