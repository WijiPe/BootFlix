import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../style/loginreg.css'
import bootflix from '../pngs/bootflix.png';
import NavBar from '../components/NavBar';



const Register = () => {
    
    const history = useHistory()
    const [loggedinuser, setLoggedInUser] = useState({})    
    
    const [registerInfo, setRegisterInfo] = useState({
        username: "",
        email: ""
    
    })
    useEffect(() => {
        // checking to seee if user is logged in, if not redirect to Index.jsx
        axios.get("http://localhost:8000/api/users/getloggedinuser", { withCredentials: true })
            .then(res => {
                console.log("logged in user info", res)
                setLoggedInUser(res.data)
                setRegisterInfo({username: res.data.username, email: res.data.email})
            })
            .catch(err => {
                history.push('/')
                console.log("errorrrrrr", err)
            })
    }, [])
    
    
    const [errors, setErrors] = useState({
        username:"",
        email:"",
        password:"",
        confirm:""
    })
    
    const regChangeHandler = (e)=>{
        setRegisterInfo({
            ...registerInfo,
            [e.target.name]:e.target.value
        })
    }
    

    const register = (e)=>{
        e.preventDefault();
        axios.put("http://localhost:8000/api/user/update/" + loggedinuser._id, registerInfo, {withCredentials: true})
        .then(res=>{
            console.log("response from updating", res);
            if(res.data.errors){
                    setErrors(res.data.errors)
                }else{
                    console.log('success!')
                    history.push("/home")
                }
            })
            .catch(err=> console.log("hi")) // confused on the hi

    }
    console.log(registerInfo)
    return (

                    <div className="container" >
                        <NavBar  id={loggedinuser._id} username={loggedinuser.username}/>
                        
                        <form onSubmit= {register} className="box opacity">
                        <button className='clear' onClick={() => history.push('/home')}><img className='logo' src={bootflix}></img></button>
                            <div className="label">
                                <label>User Name</label>
                                <input onChange = {regChangeHandler} type="text" name= 'username' value={registerInfo.username} />
                                {errors.username? <p className="danger">{errors.username.message}</p>: ""}
                            </div>
                            <div className="label">
                                <label>Email</label>
                                <input onChange = {regChangeHandler} type="text" name= 'email' value= {registerInfo.email} />
                                {errors.email? <p className="danger">{errors.email.message}</p>: ""}
                            </div>
            
                            <input type="submit" value="Update"  />
                        </form>
                    </div>
    );
};



export default Register;
