import React from 'react';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';

type AcceptedProps = {
    tokenProp: string;
}

type userState = {
    username: string,
    password: string
}

class Login extends React.Component<AcceptedProps, userState>{

}

export default Login;