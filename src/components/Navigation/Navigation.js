import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css"

function Navigation(props) {
    const handleClick = () => {
        props.setLoggedIn(true)
    }
    
    return (
        <div>
            <ul className="d-grid">
                <li>
                    <Link to="/">Home</Link>
                </li>
                {
                    props.isLoggedIn
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
                            <Link to="/dashboard">{props.user}'s Dashboard</Link>
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
