import NavLinks from '../components/NavLinks'
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => {

      const [loggedinuser, setLoggedInUser] = useState({})
      const [popular, setPopular] = useState([])


    useEffect(()=>{
        axios.get("http://localhost:8000/api/users/getloggedinuser", {withCredentials:true})
            .then(res=>{
                console.log("logged in user info", res)
                setLoggedInUser(res)
            })
            .catch(err=> {
                console.log("errorrrrrr",err)
            })
    }, [])

    useEffect(()=>{
      axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c49e028232019660cab8e28bf4d018d9&language=en-US&page=1")
          .then(res=>{
              console.log(res.data.results)
              setPopular(res.data.results[0])
          })
          .catch(err=> {
              console.log("errorrrrrr",err)
          })
  }, [])

  return (
    <div>
        <NavLinks  />
        <h1>Welcome, {loggedinuser.username}</h1>
        <img src={popular.poster_path} alt="Poster" />
        <p>{popular.title}</p>
    </div>
  )
}

export default Home
