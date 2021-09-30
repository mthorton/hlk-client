import React from 'react';
//import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import {Redirect, Route, Switch} from 'react-router-dom';
import AuthLogin from './AuthLogin';
import AuthSignUp from './AuthSignUp';
import AuthButton from './AuthButton';
import { Container } from 'reactstrap';



type AcceptedProps = {
    updateToken(arg: string): void;
}

// interface AcceptedProps {
//     updateToken(arg: string): void;
// }

type SessionTokenState = {
    sessionToken: string
}

class Auth extends React.Component<AcceptedProps, SessionTokenState>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
          sessionToken: ""
        }
      }
      

    render(){
        return(
            <div>
                <h1 className="auth-title">Hook, Line, and Keeper</h1>
                <Container className="auth-container">
                    <AuthButton  />
                    <Switch>
                        <Route exact path='/' component={() => (<Redirect to='/login' />)} />
                        <Route exact path='/login'><AuthLogin updateToken={this.props.updateToken} /></Route>
                        <Route exact path='/signup'><AuthSignUp updateToken={this.props.updateToken} /></Route>
                    </Switch>    
                </Container>           
            </div>
        )
    }
}

export default Auth;