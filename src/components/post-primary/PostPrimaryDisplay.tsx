import React from 'react';
import { Container, Table, Row, Col } from 'reactstrap'; 
import { Button } from 'reactstrap';
import PostSecondaryCreate from '../post-secondary/PostSecondaryCreate';
import PostSecondaryEdit from '../post-secondary/PostSecondaryEdit';
import PostPrimaryEdit from './PostPrimaryEdit';
import './PP.css';
import { AiOutlineDelete } from 'react-icons/ai'
import APIURL from '../../helpers/environment';

type AcceptedProps = {
    token: string,
    events: Array<any>, //possible not type string, Array<string>
    editUpdateEvent(arg: Array<string>): void,
    updateOn: any,
    fetchEvents(): any,
    eventToUpdate: any,
    updateOff():any,
};

type SetVariables = {
    eventsSecondary: Array<any>,
    eventSecondaryToUpdate: any,
    updateActiveSecondary: boolean
}

class EventFeedTable extends React.Component<AcceptedProps, SetVariables>{
    constructor(props: AcceptedProps){
        super(props)
        this.state = {
            eventsSecondary: [],
            eventSecondaryToUpdate: {},
            updateActiveSecondary: false
        }
    }

    editUpdateSecondaryEvent = (event: Array<string>) => {
        this.setState({
            eventSecondaryToUpdate: event
        })
    }

    updateOnSecondary = () => {
        this.setState({
            updateActiveSecondary: true
        })
    }

    updateOffSecondary = () => {
        this.setState({
            updateActiveSecondary: false
        })
    }

    deleteEvent = (event: { id: any; }) => {
        console.log('delete endpoint')
        fetch(`${APIURL}/postprimary/delete/${event.id}`, {
        //fetch(`http://localhost:3000/postprimary/delete/${event.id}`, {  
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${this.props.token}`
            })
        })
        .then(() => this.props.fetchEvents())
    }

    deleteSecondaryEvent = (event: { id: any; }) => {
        console.log('delete secondary endpoint')
        fetch(`${APIURL}/postsecondary/delete/${event.id}`, {
        //fetch(`http://localhost:3000/postsecondary/delete/${event.id}`, {  
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${this.props.token}`
            })
        })
        .then(() => this.props.fetchEvents())
    }

    eventMapper = () => {
        //console.info('mappping')
        return this.props.events.map((event, index) => {
            return(
                <>
                    <hr/>
                    <Container style={{backgroundColor: 'rgb(255,255,255,0.5)'}}>
                        <Row>
                            <Col key={index} xs="2">
                                <h4>Date: {event.date}</h4>
                                <h4>Genre: {event.genre}</h4>
                            </Col>
                            <Col xs="6">
                                <h4>Post: </h4><p style={{ textAlign:"left", textIndent:"10%"}}>{event.post}</p>
                            </Col>
                            <Col xs="3">
                                <h4>Thoughts: </h4>{event.thoughts}
                            </Col>
                         
                            <Col xs="1" >
                                <PostPrimaryEdit eventToUpdate={event}
                                        updateOff={this.props.updateOff} token={this.props.token} fetchEvents={this.props.fetchEvents} />
                           
                                <Button color="danger" onClick={() => { this.deleteEvent(event); } }><AiOutlineDelete/></Button>
                           
                                <PostSecondaryCreate token={this.props.token} event={event} fetchEvents={this.props.fetchEvents} primaryPost={event.post}/>
                            </Col>
                                
                        </Row>
                    </Container>
                    <hr/>

                    <Container>
                        
                        <div className="secondary-event">{event.postsecondaries.map((secPost: any) => {
                            return(
                                <Row style={{ width:"100%", paddingLeft:"25%", backgroundColor: 'rgb(255,255,255,0.5)' }}>
                                    <Col key={index}>
                                        <h6>Date: {secPost.date}</h6>
                                    </Col>
                                    <Col xs="6">
                                        <h6>Post: </h6><p style={{ textAlign:"left", textIndent:"10%"}}>{secPost.post}</p>
                                    </Col>
                                    <Col xs="3">
                                        <h6>Thoughts: </h6>{secPost.thoughts}
                                    </Col>
                                    <Col>
                                        
                                        <PostSecondaryEdit token={this.props.token} event={secPost} updateOffSecondary={this.updateOffSecondary} fetchEvents={this.props.fetchEvents} />

                                        <Button color="danger" onClick={() => { this.deleteSecondaryEvent(secPost); } }><AiOutlineDelete/></Button>
                                       
                                    </Col>

                                </Row>
                                
                            )
                        })}</div>
                        
                    </Container>
                    
                </>
            )
        })
    }

    

    render(){
        return(
            <>
            {console.info(this.state.eventSecondaryToUpdate)}           
            <h1 className='feed-header' style={{ float:"left", paddingTop:"1%" }}>Posts:</h1>
            
            <Table >
                
                <div className='feed-display'>
                    {this.eventMapper()}
                </div>
                
            </Table>
            </>
        )
    }
}

export default EventFeedTable;