import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./Navigation.css"
import Axios from "axios"
import { useAlert } from 'react-alert'

function Navigation(props) {

    let history = useHistory();
    let alert = useAlert();

    const handleClick = (e) => {
        e.preventDefault();
        Axios.get("http://localhost:4000/users/logout")
        .then(response => {
            if (response.statusText === "OK") {
                history.push("/login")
                props.setLoggedIn(false)
                alert.show(response.data.success_msg)
            }
        })
        .catch(err => {
            console.log(err);
        })        
    }

    return (
        <div>
            <ul className="d-grid">
                <li>
                    <Link to="/">Home</Link>
                </li>
                {
                    !props.isLoggedIn
                    ?
                    <div className="d-subgrid">
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </div>
                    :
                    <div className="d-subgrid">
                        <li>
                            <Link to="/dashboard">{props.user.name}'s Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/login" onClick={handleClick}>Signout</Link>
                        </li>
                    </div> 
                }                               
            </ul>
        </div>
    )
}

export default Navigation
