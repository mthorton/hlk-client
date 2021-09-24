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

    fetchProfile = () => {
        fetch('http://localhost:3000/postprimary/all', {
        method: "GET",
        headers: new Headers({
            'Content-Type': "application/json",
            'Authorization': `Bearer ${this.props.token}`,
        })
    }).then((res) => res.json())
    .then((logData) => {
        this.setState({
            events: logData
    });
    })}     

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