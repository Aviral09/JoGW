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
import Navbar from './components/navbar/navbar';
import ReadMessagePopup from './components/Popups/ReadMessagePopup';
import SendMessagePopup from './components/Popups/SendMessagePopup';

function App() {
  return (
    /*  <Router>
        <Switch>
          <Route exact path="/home" component={Logout} />
          <Route exact path="/" component={Login} />
  
          //<Redirect to="/login" />
        </Switch>
    </Router>*/
    <Navbar/>
    // <ReadMessagePopup />
    // <SendMessagePopup submitFunction={(a, b) => { console.log(a + '\n' + b); }} />
    // <div className='App'>
    // 	<Login />
    // 	<Logout />
    // </div>
  );
}



export default App;
