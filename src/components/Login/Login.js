import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Axios from 'axios'
import { useAlert } from 'react-alert'

function Login(props) {

    let history = useHistory();
    let alert = useAlert();

    const[state, setState] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value 
        })
    }

    const handleClick = () => {
        login();
    }

    const login = () => {
        Axios.post("http://localhost:4000/users/login", {
            email: state.email,
            password: state.password
        })
        .then((response) => {
            if (response.data.user.email) {
              props.setLoggedIn(true);              
              props.loadUser(response.data.user);     
              history.push("/dashboard");
              alert.show(response.data.success_msg)
            } else {
              alert.show("Server is not responding. Please try after sometime");
            }
          })
        .catch ((error) => { 
            alert.show(error.response.data);          
          });    
    }

    return (
        <div>
            <h1>Login</h1>
            <div>
                <input onChange={handleChange} type="email" id="email" name="email" placeholder="enter your email" required/>
            </div>
            <div>
                <input onChange={handleChange} type="password" id="password" name="password" placeholder="enter your password" required/>
            </div>
            <div>
                <button onClick={handleClick} type="submit">Login</button>
            </div>
            <div>            
                <Link to="/register">If Not Registered</Link>
            </div>
        </div>
    )
}

export default Login
