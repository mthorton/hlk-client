import React from 'react';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';

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
            <Container>
                <Row>
                    <h1>Profile</h1>
                </Row>
                <Row>
                    
                </Row>
            </Container>
        )
    }
}

export default Profile;