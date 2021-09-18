import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Auth from './components/pages/Auth';
import Home from './components/pages/Home';

type LocalStorageState = {
  localStorage: string
}

const App: React.FunctionComponent<LocalStorageState> = () => {
//function App() {
  const [sessionToken, setSessionToken] = useState('');

  // useEffect(() => {
  //   if (localStorage.getItem('token')){
  //     setSessionToken(localStorage.getItem('token'));
  //   }
  // }, [])

  const updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
    }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <Home token={sessionToken}/>
    : <Auth updateToken={updateToken}/>) //updateToken={updateToken}
  }

  return (
    <div className="App">
      <div>
    
        <Router>
          {protectedViews()}
        </Router>
        
      </div>
    </div>
  );
}

export default App;
