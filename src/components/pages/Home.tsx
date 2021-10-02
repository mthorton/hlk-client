import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Feed from './Feed';
import Landing from './Landing';
import NavBar from './NavBar';
import Profile from './Profile';
import Footer from './Footer';
import './Home.css';

type AcceptedProps = {
    token: string
};

class Home extends React.Component<AcceptedProps>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            sessionToken: ""
        }
    }

    componentDidMount(){
        if (localStorage.getItem('token')){
            this.setState({
                sessionToken: localStorage.getItem('token')
          })
        }
    }    

    clearToken = () => {
        localStorage.clear();
        this.setState({ sessionToken: "" });
      }
    
    render(){
        return(
            <div>
                <NavBar clickLogout={this.clearToken}/>
            
                <Switch>
                    <Route exact path='/' component={() => (<Redirect to='/landing' />)} />
                    <Route exact path='/landing'><Landing /></Route>
                    <Route exact path='/feed'><Feed token={this.props.token} /></Route>
                    <Route exact path='/profile'><Profile token={this.props.token} /></Route>
                </Switch>

                <Footer/>
            </div>
        )
    }
}

export default Home;