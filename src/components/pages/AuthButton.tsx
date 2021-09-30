import React from 'react';
import './Auth.css';
import {Link} from 'react-router-dom';
import {
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