import React from 'react';
import { Container, Row } from 'reactstrap';
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
                    <Row className="landing-our-goal">
                        <h2>Our goal...</h2>
                    </Row>
                    <Row className="landing-our-goal-text">
                        <h2>We want to help amateur writers grab their audience's attention so they can tell their tales. </h2>
                    </Row>
                </Container>
            </div>
            
        )
    }
}

export default Landing;