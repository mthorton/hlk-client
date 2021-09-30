import React from 'react';
import Login from '../auth/Login';



type AcceptedProps = {
    updateToken(arg: string): void;
}

type SessionTokenState = {
    sessionToken: string
}

class AuthLogin extends React.Component<AcceptedProps, SessionTokenState>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
          sessionToken: ""
        }
      }

    render(){
        return(
            <div>
               <Login updateToken={this.props.updateToken} />            
            </div>
        )
    }
}

export default AuthLogin;