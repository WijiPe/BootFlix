import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../style/loginreg.css'
import bootflix from '../pngs/bootflix.png';



const Login = () => {
    const [loginInfo, setLoginInfo] = useState({ 
        email:"",
        password:"",
    })
    const history = useHistory()


    const loginChangeHandler = (e)=>{
        setLoginInfo({
            ...loginInfo,
            [e.target.name]:e.target.value
        })
    }

    const login = (e)=>{
        e.preventDefault();
        axios.post("/api/login", loginInfo, {withCredentials:true} )
            .then(res=>{
                console.log("LOGGGIN IN RESPONSE", res)
                if(res.data.msg == "success!"){
                    history.push("/home")
                }
            })
            .catch(err=>console.log(err))
    }
    
    const register = (e) =>{ 
        e.preventDefault();
        let path="/signup"; 
        history.push(path);
    }




    return (
<div className='container'>


            <form onSubmit = {login} class="box">
                <button className='clear' onClick={() => history.push('/home')}><img className='logo' src={bootflix}></img></button>
                <h1 className='signin'>Sign In</h1>
                <input onChange = {loginChangeHandler} type="text" name="email" placeholder="Email" /> 
                <input onChange = {loginChangeHandler} type="password" name="password" placeholder="Password"/>    
                <input onChange = {loginChangeHandler} type="submit" name="" value="Login" href="#"/> 
                <input onChange = {loginChangeHandler} onClick={register} type="submit" name="register" value="Register" href="#"/>
                <a className='forgot' href="#">Forgot password?(should have saved it)</a>  
            </form>  


</div>
);
};
export default Login;