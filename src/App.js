import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState ({
    name: "",
    email: ""
  })

  const loadUser = (user) => {
    setUser({
      name: user.name,
      email: user.email
    })
  }

  return (
    <Router>
      <div>
        <Navigation user={user} isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/login">
            <Login setLoggedIn={setLoggedIn} loadUser={loadUser}/>
          </Route>
          <Route exact path="/register">
            <Register setLoggedIn={setLoggedIn} loadUser={loadUser}/>
          </Route>
          {
          isLoggedIn
          ? 
          <Route exact path="/dashboard">
            <Dashboard user={user}/>
          </Route>
          :
          <Redirect to="/login" />
          }
          
        </Switch>      
      </div>
    </Router>
  );
}

export default App;
