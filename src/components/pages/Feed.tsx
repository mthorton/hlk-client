import React from 'react';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';

type AcceptedProps = {
    token: string;
}

class Feed extends React.Component<AcceptedProps>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            sessionToken: ""
        }
    }


    render(){
        return(
            <div>
                <h1>Feed</h1>
            </div>
        )
    }
}

export default Feed;