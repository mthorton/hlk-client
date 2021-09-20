import React from 'react';
import { Col, Container, Row } from 'reactstrap'; //Button, Form, FormGroup, Label, Input
//import Login from './Login';
import SignUp from './SignUp';

type AcceptedProps = {
    updateToken(arg: string): void;
}

// interface AcceptedProps {
//     updateToken(arg: string): void;
// }

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
                            <SignUp updateToken={this.props.updateToken} />
                        </Col>
                        <Col md="6" className="login-col">
                            {/* <Login updateToken={this.props.updateToken}/> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default IndexAuth;