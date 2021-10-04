import './App.css';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import Auth from './components/pages/Auth';
import Home from './components/pages/Home';

type SetVariables = {
  sessionToken: string
}

class App extends React.Component<{},SetVariables>{
    state = {
        sessionToken: ""
    }

  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken);
    this.setState({
      sessionToken: newToken
    })
  }

  componentDidMount(){
    this.protectedViews()
  }

  protectedViews = () => {
    return (this.state.sessionToken === localStorage.getItem('token') ? <Home token={this.state.sessionToken}/>
    : <Auth updateToken={this.updateToken}/>)
  }

  render(){
    return (
      <div className="App">
        <div>
      
          <Router>
            {this.protectedViews()}
          </Router>
          
        </div>
      </div>
    );
  }
  
}

export default App;
