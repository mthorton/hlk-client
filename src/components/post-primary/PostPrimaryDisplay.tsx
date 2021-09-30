import React from 'react';
import { Table} from 'reactstrap'; 
//import APIURL from '../helpers/environment';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import PostSecondaryCreate from '../post-secondary/PostSecondaryCreate';
import PostSecondaryDisplay from '../post-secondary/PostSecondaryDisplay';
import PostPrimaryEdit from './PostPrimaryEdit';


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

    fetchSecondaryEvents = (event: any) => {
        console.info("fetch ?")
        fetch(`http://localhost:3000/postsecondary/all/${event}`, {
        method: "GET",
        headers: new Headers({
            'Content-Type': "application/json",
            'Authorization': `Bearer ${this.props.token}`,
        })
    }).then((res) => res.json())
    .then((logData) => {
        console.log(logData)
        this.setState({
            eventsSecondary: logData
    });
    console.info(this.state.eventsSecondary)
    })}  

    editUpdateSecondaryEvent = (event: Array<string>) => {
        this.setState({
            eventSecondaryToUpdate: event
        })
        //console.log(event)
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
        fetch(`http://localhost:3000/postprimary/delete/${event.id}`, {  
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${this.props.token}`
            })
        })
        .then(() => this.props.fetchEvents())
    }

    eventMapper = () => {
        console.info('mappping')
        return this.props.events.map((event, index) => {
            return(
                <>
                    <tr key={index}>
                        <th scope="row">{event.id}</th>
                        <td>{event.date}</td>
                        <td>{event.genre}</td>
                        <td>{event.post}</td>
                        <td>{event.thoughts}</td>
                        <th>
                            <PostPrimaryEdit eventToUpdate={event}
                                updateOff={this.props.updateOff} token={this.props.token} fetchEvents={this.props.fetchEvents} />
                            <Button onClick={() => { this.deleteEvent(event); } }>Delete</Button>
                            <PostSecondaryCreate token={this.props.token} event={event} fetchSecondaryEvents={this.fetchSecondaryEvents}/>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <PostSecondaryDisplay token={this.props.token} eventsSecondary={this.state.eventsSecondary} editUpdateSecondaryEvent={this.editUpdateSecondaryEvent} updateOnSecondary={this.updateOnSecondary} eventSecondaryToUpdate={event} updateOffSecondary={this.updateOffSecondary} event={event}/>                     
                        </th>
                    </tr>
                    
                </>
            )
        })
    }

    

    render(){
        return(
            <>
            {console.info(this.state.eventSecondaryToUpdate)}           
            <h3 className='feed-header'>Posts</h3>
            <hr/>
            <Table>
                <thead className='feed-table'>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Genre</th>
                        <th>Post</th>
                        <th>Thoughts</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.eventMapper()}
                </tbody>
            </Table>
            </>
        )
    }
}

export default EventFeedTable;