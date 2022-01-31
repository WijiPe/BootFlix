import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../style/loginreg.css'
import BootFlixLogo from './BootFlixLogo';


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
        axios.post("http://localhost:8000/api/login", loginInfo, {withCredentials:true} )
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


        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <form onSubmit = {login} class="box opacity">
                        <BootFlixLogo />
                            <input onChange = {loginChangeHandler} type="text" name="email" placeholder="Username" /> 
                            <input onChange = {loginChangeHandler} type="password" name="password" placeholder="Password"/>
                            <a  class="forgot text-muted" href="#">Forgot password?</a> 
                            
                                
                            <input onChange = {loginChangeHandler} type="submit" name="" value="Login" href="#"/> 
                            <input onChange = {loginChangeHandler} onClick={register} type="submit" name="" value="Register" href="#"/>
                            <div className="col-md">
                                <ul className="social-network social-circle">
                                    <li><a href="#" className="icoFacebook" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="icoTwitter" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" className="icoGoogle" title="Google +"><i className="fab fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </form>  
                    </div>
                </div>
            </div>
        </div>

);
};
export default Login;