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
                        <h2>The goal...</h2>
                    </Row>
                    <Row className="landing-our-goal-text">
                        <h2>To help amateur writers grab the attention of their audiences by helping to develop their opening hook.</h2>
                    </Row>
                    <Row className="how-it-works">
                        <h2>How it works...</h2>
                    </Row>
                    <Row className="how-it-works-text">
                        <h2>Create a post with the current hook you're working on wait for a community of writers to help you workshop your idea.</h2>
                    </Row>
                    <Row className="how-to-help">
                        <h2>How to help...</h2>
                    </Row>
                    <Row className="how-to-help-text">
                        <h2>Go to the feed page and click on the green plus on any post to help the original poster workshop their hook.</h2>
                    </Row>
                    <Row className="what-next">
                        <h2>What's next...</h2>
                    </Row>
                    <Row className="what-next-text">
                        <h2>Head to the feed page are start developing the hook for your next great story!</h2>
                    </Row>
                </Container>
            </div>
            
        )
    }
}

export default Landing;