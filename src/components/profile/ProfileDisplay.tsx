import React from 'react';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';

type AcceptedProps = {
    events: Array<any>,
    secondaryEvents: Array<any>
}

class ProfileDisplay extends React.Component<AcceptedProps>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
    
        }
    }

    eventMapper = () => {
        console.log("mapping profile")
        console.log(this.props.events)
        return this.props.events.map((event, index) => {
            return(
                <>
                    <hr/>

                    <Container style={{ width:"100%", paddingLeft:"15%", backgroundColor: 'rgb(255,255,255,0.5)' }}>
                        <Row >
                            <Col key={index} >
                                <h4>Date: {event.date}</h4>
                                <h4>Genre: {event.genre}</h4>
                            </Col>
                            <Col >
                                <h4>Post: </h4><p style={{ textAlign:"left", textIndent:"10%"}}>{event.post}</p>
                            </Col>
                            <Col >
                                <h4>Thoughts: </h4>{event.thoughts}
                            </Col>
                        </Row>
                    </Container>

                    <hr/>

                </>
            )
        })
    }

    secondaryEventMapper = () => {
        console.log("mapping profile")
        console.log(this.props.events)
        return this.props.events.map((event, index) => {
            return(
                <>
                    <hr/>

                    <Container style={{ width:"100%", paddingLeft:"15%", backgroundColor: 'rgb(255,255,255,0.5)' }}>
                        <Row >
                            <Col key={index} >
                                <h4>Date: {event.date}</h4>
                            </Col>
                            <Col >
                                <h4>Post: </h4><p style={{ textAlign:"left", textIndent:"10%"}}>{event.post}</p>
                            </Col>
                            <Col >
                                <h4>Thoughts: </h4>{event.thoughts}
                            </Col>
                        </Row>
                    </Container>

                    <hr/>

                </>
            )
        })
    }

    render(){
        return(
            <div>
                <Container className="main-container">
                    <Row className="profile-container">
                        <Col className="profile-title">
                            <h1 className="profile-main-title">Profile</h1>
                        </Col>
                        <Col xs="10"/>
                    </Row>
                    
                    <Row>
                        <Col>
                            <h3 style={{ textAlign:"left" }}>Posts:</h3>
                        </Col>
                        <Col xs="7"/>
                    </Row>
                    <Row>
                        {this.eventMapper()}

                    </Row>
                    <Row>
                        <Col>
                            <h3 style={{ textAlign:"left" }}>Sub-Posts:</h3>
                        </Col>
                        <Col xs="7"/>
                    <Row>
                        {this.secondaryEventMapper()}

                    </Row>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ProfileDisplay;