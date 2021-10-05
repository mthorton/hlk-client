import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './Home.css';
import APIURL from '../../helpers/environment';
import ProfileDisplay from '../profile/ProfileDisplay';


type AcceptedProps = {
    token: string;
}

type VariableTypes = {
    events: Array<any>,
    secondaryEvents: Array<any>
}

class Profile extends React.Component<AcceptedProps, VariableTypes>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            events: [],
            secondaryEvents: [],
        }
    }

    componentDidMount(){
        this.fetchEvents()
        this.fetchSecondaryEvents()
    }

    fetchEvents = () => {
        //fetch('http://localhost:3000/postprimary/all', {
        fetch(`${APIURL}/postprimary/mine`, {
        method: "GET",
        headers: new Headers({
            'Content-Type': "application/json",
            'Authorization': `Bearer ${this.props.token}`,
        })
    }).then((res) => res.json())
    .then((logData) => {
        this.setState({
            events: logData
    });
    console.log(this.state.events)
    })} 

    fetchSecondaryEvents = () => {
        //fetch('http://localhost:3000/postprimary/all', {
        fetch(`${APIURL}/postsecondary/mine`, {
        method: "GET",
        headers: new Headers({
            'Content-Type': "application/json",
            'Authorization': `Bearer ${this.props.token}`,
        })
    }).then((res) => res.json())
    .then((logData) => {
        this.setState({
            secondaryEvents: logData
    });
    console.log(this.state.events)
    })} 

    render(){
        return(
            <div className="main-background">

                <ProfileDisplay events={this.state.events} secondaryEvents={this.state.secondaryEvents}/>
            
            </div>
        )
    }
}

export default Profile;