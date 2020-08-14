import React from 'react'

function Dashboard(props) {
    return (
        <div>
           <h1>Hello {props.user.name}</h1> 
        </div>
    )
}

export default Dashboard
