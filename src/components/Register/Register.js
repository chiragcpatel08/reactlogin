import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'
import { useAlert } from 'react-alert'

function Register(props) {

    let history = useHistory();
    let alert = useAlert();

    const [state, setState] = useState ({
        name: "",
        email: "",
        password: "",
        password1: ""    
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value})
    }

    const handleClick = () => {    
        register();        
    }

    const register = () => {
        Axios.post("http://localhost:4000/users/register", {
            name: state.name,
            email: state.email,
            password: state.password,
            password1: state.password1
        })
        .then((response) => {
            if (response.data.email) {
              props.setLoggedIn(true);
              props.loadUser(response.data);   
              history.push("/dashboard");
            } else {
              alert.show("Server is not responding. Please try after sometime");
            }
          })
        .catch ((error) => {
            if(Array.isArray(error.response.data)) {
                error.response.data.forEach(errors => {
                    alert.show(errors.message);
                });
            } else {
                alert.show(error.response.data)
            }            
          });    
    }
    
    return (
        <div>
            <h1>Register</h1>            
                <div>
                    <input onChange={handleChange} type="text" id="name" name="name" placeholder="enter your name"/>
                </div>
                <div>
                    <input onChange={handleChange} type="email" id="email" name="email" placeholder="enter your email"/>
                </div>
                <div>
                    <input onChange={handleChange} type="password" id="password" name="password" placeholder="enter your password"/>
                </div>
                <div>
                    <input onChange={handleChange} type="password" id="password1" name="password1" placeholder="re-enter your password"/>
                </div>
                <div>
                    <button onClick={handleClick} type="submit">Register</button>
                </div>
                <div>
                    <Link to="/login">If Already Registered</Link>
                </div>                
        </div>
    )
}

export default Register
