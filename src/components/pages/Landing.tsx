import React from 'react';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import './Home.css';

type AcceptedProps = {
    tokenProp: string;
}

type userState = {
    username: string,
    password: string
}

class Landing extends React.Component{


    render(){
        return(
            <div className="main-background">
                <Container className="main-container">
                    <Row className="landing-top">
                        <h1>Hook, Line, and Keeper</h1>
                    </Row>
                    <Row className="landing-middle">
                        <h4>Do you write compelling stories?</h4>
                    </Row>
                </Container>
            </div>
            
        )
    }
}

export default Landing;