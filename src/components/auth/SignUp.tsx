import React from 'react'; //{ Component }
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'; //Col, Container, Row

type AcceptedProps = {
    updateToken(arg: string): void;
}

// interface AcceptedProps {
//     updateToken(arg: string): void;
// }

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
          username: "username@email.com",
          password: "password",
        }
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
      }

    handleSubmit = (event: { preventDefault: () => void; }) => {
        // console.log("enter handle submit")
        // console.log(this.state.username)
        // console.log(this.state.password)
        event.preventDefault();
        fetch('http://localhost:3000/user/register', {
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
        return(
            <div>
            <h1>Sign Up</h1>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input type="text" value={this.state.username} onChange={this.setUsername}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="text" value={this.state.password} onChange={this.setPassword}/>
                </FormGroup>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
        )
    }
}

export default SignUp;