import React from 'react';
import { Table} from 'reactstrap'; 
import { Button } from 'reactstrap';
import PostSecondaryCreate from '../post-secondary/PostSecondaryCreate';
import PostSecondaryEdit from '../post-secondary/PostSecondaryEdit';
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
        fetch(`http://localhost:3000/postprimary/delete/${event.id}`, {  
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${this.props.token}`
            })
        })
        .then(() => this.props.fetchEvents())
    }

    deleteSecondaryEvent = (event: { id: any; }) => {
        console.log('delete endpoint')
        fetch(`http://localhost:3000/postsecondary/delete/${event.id}`, {  
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
                            <PostSecondaryCreate token={this.props.token} event={event} fetchEvents={this.props.fetchEvents}/>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            {/* <PostSecondaryDisplay token={this.props.token} eventsSecondary={this.state.eventsSecondary} editUpdateSecondaryEvent={this.editUpdateSecondaryEvent} updateOnSecondary={this.updateOnSecondary} eventSecondaryToUpdate={event} updateOffSecondary={this.updateOffSecondary} event={event}/>                      */}
                            <td>{event.postsecondaries.map((secPost: any) => {
                                return(
                                    <>
                                        <tr key={index}>
                                            <th scope="row">{secPost.id}</th>
                                            <td>{secPost.date}</td>
                                            <td>{secPost.post}</td>
                                            <td>{secPost.thoughts}</td>
                                            <th>
                                                <PostSecondaryEdit token={this.props.token} event={secPost} updateOffSecondary={this.updateOffSecondary} fetchEvents={this.props.fetchEvents} />

                                                <Button onClick={() => { this.deleteSecondaryEvent(secPost); } }>Delete</Button>
                                            </th>
                                        </tr>

                                    </>
                                )
                            })}</td>
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