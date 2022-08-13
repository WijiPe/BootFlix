import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../style/loginreg.css'
import bootflix from '../pngs/bootflix.png';



const Register = () => {
    const history = useHistory()

    const [registerInfo, setRegisterInfo] = useState({
        username:"",
        email:"",
        password:"",
        confirm:""
    })

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
        axios.post("/bootflix/api/register", registerInfo, {withCredentials:true})
            .then(res=>{
                console.log("response from registering", res);
                if(res.data.errors){
                    setErrors(res.data.errors)
                }else{
                    console.log('success!')
                    history.push("/home")
                }
            })
            .catch(err=> console.log("hi")) // confused on the hi

    }

    return (

                    <div className="container" >
                        <form onSubmit= {register} className="box opacity">
                        <button className='clear' onClick={() => history.push('/home')}><img className='logo' src={bootflix}></img></button>
                        <h1 className='signin'>Register</h1>
                            <div className="label">
                                <label>User Name</label>
                                <input onChange = {regChangeHandler} type="text" name= 'username' placeholder="Username" />
                                {errors.username? <p className="danger">{errors.username.message}</p>: ""}
                            </div>
                            <div className="label">
                                <label>Email</label>
                                <input onChange = {regChangeHandler} type="text" name= 'email' placeholder="Email" />
                                {errors.email? <p className="danger">{errors.email.message}</p>: ""}

                            </div>
                            <div className='label'>
                                <label >Password</label>
                                <input onChange = {regChangeHandler} type="password" name= 'password' placeholder="Password" />
                                {errors.password? <p className="danger">{errors.password.message}</p>: ""}

                            </div>
                            <div className="label">
                                <label>Confirm Password</label>
                                <input onChange = {regChangeHandler} type="password" name= 'confirm' placeholder="Confirm Password" />
                                {errors.confirm? <p className="danger">{errors.confirm.message}</p>: ""}

                            </div>
                            <input type="submit" value="Sign Up"  />
                        </form>
                    </div>
    );
};



export default Register;
