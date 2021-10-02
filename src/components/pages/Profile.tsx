import React from 'react';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';
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
                    <Row>
                        <h1>Profile</h1>
                    </Row>
                    <Row>
                        
                    </Row>
                </Container>
            
            </div>
        )
    }
}

export default Profile;