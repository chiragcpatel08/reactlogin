import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <Router>
      <div>
        <Navigation user="Chirag" isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/dashboard">
            <Dashboard user="Chirag"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
