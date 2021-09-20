import React from 'react';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';

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
            <div>
                <h1>Landing</h1>
            </div>
        )
    }
}

export default Landing;