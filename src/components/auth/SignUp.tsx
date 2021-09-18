import React, { Component } from 'react';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';

type AcceptedProps = {
    tokenProp: string;
}

type UserState = {
    username: string,
    password: string
}

type SetTypes = {
    i: string
}

class SignUp extends React.Component<AcceptedProps, UserState, SetTypes>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
          username: "",
          password: ""
        }
      }

    handleSubmit() {
        //event.preventDefault();
        fetch('http://localhost:3000/user/register', {
            method: 'POST', 
            body: JSON.stringify({user:{username: this.state.username, password: this.state.password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            //this.props.updateToken(data.sessionToken)
        })
    }

    setUsername = (i: { target: { value: any; }; }) => {
        this.setState({
            username: i.target.value 
        });
    }

    setPassword = (i: { target: { value: any; }; }) => {
        this.setState({
            password: i.target.value 
        });
    }

    render(){
        return(
            <div>
            <h1>Sign Up</h1>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={this.setUsername}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={this.setPassword}/>
                </FormGroup>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
        )
    }
}

export default SignUp;