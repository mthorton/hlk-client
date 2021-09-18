import React from 'react';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import Login from './Login';
import SignUp from './SignUp';

type AcceptedProps = {
    updateToken: object;
}

type SessionTokenState = {
    sessionToken: string
}

class IndexAuth extends React.Component<AcceptedProps, SessionTokenState>{
    constructor(props: AcceptedProps){
        super(props)
    }
    
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col md="6">
                            {/* <SignUp updateToken={props.updateToken} /> */}
                        </Col>
                        <Col md="6" className="login-col">
                            {/* <Login updateToken={props.updateToken}/> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default IndexAuth;