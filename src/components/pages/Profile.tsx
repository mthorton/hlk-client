import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './Home.css';

type AcceptedProps = {
    token: string;
}

class Profile extends React.Component<AcceptedProps>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
    
        }
    }

    render(){
        return(
            <div className="main-background">

                <Container className="main-container">
                    <Row className="profile-container">
                        <Col className="profile-title">
                            <h1 className="profile-main-title">Profile</h1>
                        </Col>
                        <Col xs="10"/>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Email:</h3>
                        </Col>
                        <Col xs="7"/>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Posts:</h3>
                        </Col>
                        <Col xs="7"/>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Sub-Posts:</h3>
                        </Col>
                        <Col xs="7"/>
                    </Row>
                </Container>
            
            </div>
        )
    }
}

export default Profile;