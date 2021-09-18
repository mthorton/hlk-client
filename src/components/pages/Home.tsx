import React from 'react';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';

type AcceptedProps = {
    token: string
};

class Home extends React.Component<AcceptedProps>{
    constructor(props: AcceptedProps){
        super(props)
    }
    
    render(){
        return(
            <div>
                <h1>Home Page.</h1>
            </div>
        )
    }
}

export default Home;