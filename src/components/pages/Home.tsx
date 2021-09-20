import React from 'react';
//import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import {Redirect, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';


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

    // useEffect(() => {
    //     if (localStorage.getItem('token')){
    //       setSessionToken(localStorage.getItem('token'));
    //     }
    //   }, [])

    clearToken = () => {
        localStorage.clear();
        this.setState({ sessionToken: "" });
      }
    
    render(){
        return(
            <div>
                <NavBar clickLogout={this.clearToken}/>
            
                <Switch>
                    {/* <Route exact path='/' component={() => (<Redirect to='/eventfeed' />)} />
                    <Route exact path='/eventfeed'><EventFeed /></Route>
                    <Route exact path='/createevent'><EventIndex token={this.props.token} /></Route>
                    <Route exact path='/profile'><Profile /></Route> */}
                </Switch>
            </div>
        )
    }
}

export default Home;