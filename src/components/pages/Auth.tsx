import React from 'react';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import IndexAuth from '../auth/IndexAuth';


type AcceptedProps = {
    updateToken: object;
}

type SessionTokenState = {
    sessionToken: string
}

class Auth extends React.Component<AcceptedProps, SessionTokenState>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
          sessionToken: ""
        }
      }

    // updateToken = (newToken: string) => {
    // localStorage.setItem('token', newToken);
    // this.setState({ sessionToken: newToken})
    // //setSessionToken(newToken);
    // console.log(this.state.sessionToken);
    // }

    render(){
        return(
            <div>
                <IndexAuth updateToken={this.props.updateToken}/> 
                {/* updateToken={this.props.updateToken} */}
            </div>
        )
    }
}

export default Auth;