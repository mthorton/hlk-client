import React from 'react';
import SignUp from '../auth/SignUp';



type AcceptedProps = {
    updateToken(arg: string): void;
}

type SessionTokenState = {
    sessionToken: string
}

class AuthSignUp extends React.Component<AcceptedProps, SessionTokenState>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
          sessionToken: ""
        }
      }

    render(){
        return(
            <div>
                <SignUp updateToken={this.props.updateToken} />
            </div>
        )
    }
}

export default AuthSignUp;