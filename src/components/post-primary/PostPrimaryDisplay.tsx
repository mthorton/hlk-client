import React from 'react';
import { Table} from 'reactstrap'; 
import { Button } from 'reactstrap';
import PostSecondaryCreate from '../post-secondary/PostSecondaryCreate';
import PostSecondaryEdit from '../post-secondary/PostSecondaryEdit';
import PostPrimaryEdit from './PostPrimaryEdit';
import './PP.css';

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
                    <hr/>
                    <div key={index} className='feed-date-genre'>
                        <h4>Date: {event.date}</h4>
                        <h4>Genre: {event.genre}</h4>
                    </div>
                    <div>
                        <h4>Post:</h4>{event.post}
                        <h4>Thoughts:</h4>{event.thoughts}
                    </div>
                    <div>

                        <PostPrimaryEdit eventToUpdate={event}
                                updateOff={this.props.updateOff} token={this.props.token} fetchEvents={this.props.fetchEvents} />
                        <Button onClick={() => { this.deleteEvent(event); } }>Delete</Button>
                        <PostSecondaryCreate token={this.props.token} event={event} fetchEvents={this.props.fetchEvents} primaryPost={event.post}/>

                    </div>
                    <hr/>

                    <tr>
                        
                        <td className="secondary-event">{event.postsecondaries.map((secPost: any) => {
                            return(
                                <>
                                    <tr key={index}>
                                        <td>{secPost.date}</td>
                                    </tr>
                                    <tr>
                                        <td>{secPost.post}</td>
                                    </tr>
                                    <tr>
                                        <td>{secPost.thoughts}</td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <PostSecondaryEdit token={this.props.token} event={secPost} updateOffSecondary={this.updateOffSecondary} fetchEvents={this.props.fetchEvents} />

                                            <Button onClick={() => { this.deleteSecondaryEvent(secPost); } }>Delete</Button>
                                        </th>
                                    </tr>

                                </>
                            )
                        })}</td>
                        
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