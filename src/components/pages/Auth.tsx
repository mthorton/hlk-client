import React from 'react';
//import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import IndexAuth from '../auth/IndexAuth';


type AcceptedProps = {
    updateToken(arg: string): void;
}

// interface AcceptedProps {
//     updateToken(arg: string): void;
// }

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