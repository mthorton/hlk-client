import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import APIURL from '../../helpers/environment';
import SynonymFetch from '../dictionary-api/SynonymFetch';
import PostPrimaryCreate from '../post-primary/PostPrimaryCreate';
import PostPrimaryDisplay from '../post-primary/PostPrimaryDisplay';

type AcceptedProps = {
    token: string,
}

type VariableTypes = {
    events: Array<any>, //Array<string>
    updateActive: boolean,
    eventToUpdate: any,
}

interface eventToUpdate {
    value: any
}

class Feed extends React.Component<AcceptedProps, VariableTypes, eventToUpdate>{ //eventToUpdate
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            events: [], //[]
            updateActive: false,
            eventToUpdate: {},
        }
    }

    fetchEvents = () => {
        //fetch('http://localhost:3000/postprimary/all', {
        fetch(`${APIURL}/postprimary/all`, {
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
        this.fetchEvents()
    }

    // testing(){
    //     console.log(this.state.eventToUpdate)
    //     console.log(this.state.events)
    // }

    // onClick: any = () => 

    render(){
        return(
            <Container className='event-feed'>
                {/* <Button onClick={this.onClick}>Feed</Button> */}
                <SynonymFetch word={"dog"}/>
                 <PostPrimaryCreate token={this.props.token} fetchEvents={this.fetchEvents}/>
                 <Row>
                     <Col md='12'>
                        <PostPrimaryDisplay events={this.state.events} editUpdateEvent={this.editUpdateEvent}
                        updateOn={this.updateOn} fetchEvents={this.fetchEvents} token={this.props.token} eventToUpdate={this.state.eventToUpdate} updateOff={this.updateOff}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Feed;