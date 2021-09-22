import React from 'react';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';

import PostPrimaryDisplay from '../post-primary/PostPrimaryDisplay';
import PostPrimaryEdit from '../post-primary/PostPrimaryEdit';

type AcceptedProps = {
    token: string,
}

type VariableTypes = {
    events: Array<any>, //Array<string>
    updateActive: boolean,
    eventToUpdate: object

interface eventToUpdate {
    [key: string]: any
}

class Feed extends React.Component<AcceptedProps, VariableTypes, eventToUpdate>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            events: [], //[]
            updateActive: false,
            eventToUpdate: {},
        }
    }

    fetchEvents = () => {
        fetch('http://localhost:3000/log/all', {
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
    })}     
    
    editUpdateEvent = (event: Array<string>) => {
        this.setState({
            eventToUpdate: event
        })
        //console.log(event)
    }

    updateOn = () => {
        this.setState({
            updateActive: true
        })
    }

    updateOff = () => {
        this.setState({
            updateActive: false
        })
    }

    componentDidMount(){
        this.fetchEvents
    }

    render(){
        return(
            <Container className='event-feed'>
                
                 <Row>
                     <Col md='12'>
                        <PostPrimaryDisplay events={this.state.events} editUpdateEvent={this.editUpdateEvent} 
                        updateOn={this.updateOn} fetchEvents={this.fetchEvents} token={this.props.token}/>
                    </Col>
                    {this.state.updateActive ? <PostPrimaryEdit eventToUpdate={this.state.eventToUpdate}
                    updateOff={this.updateOff} token={this.props.token} fetchEvents={this.fetchEvents}/> : <></>}
                </Row>
            </Container>
        )
    }
}


export default Feed;