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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Logout} />
        <Route exact path="/" component={Login} />

        //<Redirect to="/login" />
      </Switch>
    </Router>
    // <div className='App'>
    // 	<Login />
    // 	<Logout />
    // </div>
  );
}

export default App;
