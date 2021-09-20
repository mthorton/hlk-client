import React from 'react';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';

type AcceptedProps = {
    updateToken(arg: string): void;
}

type userState = {
    username: string,
    password: string
}

class Login extends React.Component<AcceptedProps, userState>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
          username: "username@email.com",
          password: "password",
        }
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
      }

    handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/login', {
            method: 'POST', 
            body: JSON.stringify({user:{username: this.state.username, password: this.state.password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.updateToken(data.sessionToken)
        })
    }

    setUsername = (i: { target: { value: any; }; }) => {
        this.setState({
            username: i.target.value 
        });
        //console.log(this.state.username) //testing
    }

    setPassword = (i: { target: { value: any; }; }) => {
        this.setState({
            password: i.target.value 
        });
        //console.log(this.state.password) //testing
    }

    render(){
        return (
   
            <div>
                <h1>Login</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" value={this.state.username} onChange={this.setUsername}/>                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input type="text" value={this.state.password} onChange={this.setPassword}/>
                    </FormGroup>
                    <Button type="submit">Login</Button>
                </Form>
            </div>
        )
    }
    
    
}

export default Login;