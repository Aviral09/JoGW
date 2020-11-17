import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import MessageCard from './components/core/MessageCard';
import Personal from "./components/personal/personal";
import Navbar from "./components/navbar/navbar";
import CoreDashboard from "./components/core/CoreDashboard";

function App() {
  return (
  /*  <Router>
      <Switch>
        <Route exact path="/home" component={Logout} />
        <Route exact path="/" component={Login} />

        //<Redirect to="/login" />
      </Switch>
  </Router>*/
    <div>
      <CoreDashboard />
    </div>
    // <div className='App'>
    // 	<Login />
    // 	<Logout />
    // </div>
  );
}



export default App;
