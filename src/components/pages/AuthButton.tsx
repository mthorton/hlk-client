import React from 'react';
//import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';
// import IndexAuth from '../auth/IndexAuth';
// import {Redirect, Route, Switch} from 'react-router-dom';
// import AuthLogin from './AuthLogin';
// import AuthSignUp from './AuthSignUp';
import './Auth.css';
import {Link} from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    NavItem,
    Button,
    Nav,
    Container,
} from 'reactstrap';

class AuthButton extends React.Component{
    

      render(){
        return(
            <Container className="auth-button" style={{width: "50%"}}>
                <ul id="auth-horizontal" >
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                </ul>
            </Container>
    
        );
    }
}

export default AuthButton;